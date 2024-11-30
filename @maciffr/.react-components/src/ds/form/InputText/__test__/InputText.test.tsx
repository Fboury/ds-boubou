import { composeStories } from "@storybook/react";
import { act, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import * as Stories from "../stories/InputText.stories";
import { VALIDATION_MESSAGES } from "../constantes";
import userEvent from "@testing-library/user-event";

const { Base, Required, RequiredCustom, Pattern } = composeStories(Stories);
describe("Form - InputText", function () {
  it("Doit afficher un input text vide", async function () {
    render(<Base />);

    const input = screen.getByTestId("test-input");
    expect(input).toBeInTheDocument();
    expect(input.getAttribute("aria-invalid")).toEqual("false");
    expect(input.getAttribute("aria-describedby")?.includes("error-story")).toBeFalsy();
  });

  it("Doit afficher un message d'erreur si le champ requis est vide", async function () {
    const { getByText } = render(<Required />);

    const input = screen.getByTestId<HTMLInputElement>("test-input");
    act(() => {
      input.reportValidity();
    });
    expect(getByText(VALIDATION_MESSAGES.required)).toBeInTheDocument();
    expect(input.getAttribute("aria-invalid")).toEqual("true");
    expect(input.getAttribute("aria-describedby")?.includes("error-story")).toBeTruthy();
  });

  it("Doit afficher un message d'erreur custom si le champ requis est vide", async function () {
    const { getByText } = render(<RequiredCustom />);

    const input = screen.getByTestId<HTMLInputElement>("test-input");
    act(() => {
      input.reportValidity();
    });
    expect(getByText("Champ requis custom.")).toBeInTheDocument();
    expect(input.getAttribute("aria-invalid")).toEqual("true");
    expect(input.getAttribute("aria-describedby")?.includes("error-story")).toBeTruthy();
  });

  it("Doit afficher un message d'erreur si le champ ne respecte pas le pattern", async function () {
    const { getByText } = render(<Pattern />);

    const input = screen.getByTestId<HTMLInputElement>("test-input");
    await act(async () => {
      await userEvent.type(input, "test");
      input.reportValidity();
    });
    expect(getByText(VALIDATION_MESSAGES.pattern)).toBeInTheDocument();
    expect(input.getAttribute("aria-invalid")).toEqual("true");
    expect(input.getAttribute("aria-describedby")?.includes("error-story")).toBeTruthy();
  });

  it("Doit afficher un message d'erreur si le champ contient des caractères incorrectes", async function () {
    const { getByText } = render(<Pattern />);

    const input = screen.getByTestId<HTMLInputElement>("test-input");
    await act(async () => {
      await userEvent.type(input, "test");
    });
    expect(getByText(VALIDATION_MESSAGES.pattern)).toBeInTheDocument();
    expect(input.getAttribute("aria-invalid")).toEqual("true");
    expect(input.getAttribute("aria-describedby")?.includes("error-story")).toBeTruthy();
  });

  it("Ne doit pas afficher un message d'erreur si le champ est remis à vide", async function () {
    const { queryByText } = render(<Pattern />);

    const input = screen.getByTestId<HTMLInputElement>("test-input");
    await act(async () => {
      await userEvent.type(input, "test");
      await userEvent.clear(input);
    });
    expect(queryByText(VALIDATION_MESSAGES.required)).toBeNull();
    expect(input.getAttribute("aria-invalid")).toEqual("false");
    expect(input.getAttribute("aria-describedby")?.includes("error-story")).toBeFalsy();
  });
});
