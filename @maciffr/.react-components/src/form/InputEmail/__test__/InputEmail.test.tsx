import {userEvent} from "@storybook/testing-library";
import {composeStories} from "@storybook/react";
import {act, render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";

import * as Stories from "../stories/InputEmail.stories";
import {VALIDATION_MESSAGES} from "../constantes";

const { Base, RequiredError, CustomPatternError } = composeStories(Stories);
describe("Form - InputEmail", function () {
  test("Doit afficher un input vide", async function () {
    render(<Base />);

    const input = await screen.getByTestId("test-email");

    expect(input).toBeInTheDocument();
  });

  test("Doit afficher une erreur à la validation quand l'email n'est pas saisie", async function () {
    render(<RequiredError />);

    const input = await screen.getByTestId<HTMLInputElement>("test-email");
    act(() => {
      input.reportValidity();
    });

    const error = await screen.findByText(VALIDATION_MESSAGES.required);
    expect(input.validationMessage).toBe(error.textContent);
  });

  test("Doit afficher une erreur custom à la validation quand l'email n'est pas saisie", async function () {
    render(<CustomPatternError />);

    const input = await screen.getByTestId<HTMLInputElement>("test-email");
    act(() => {
      input.reportValidity();
    });

    const error = await screen.findByText("Le champ est requis");
    expect(input.validationMessage).toBe(error.textContent);
  });

  test("Doit afficher une erreur à la validation quand l'email n'est pas au bon format", async function () {
    render(<Base />);

    const input = await screen.getByTestId<HTMLInputElement>("test-email");
    await userEvent.type(input, "test:exemple@yahoo@fr");
    act(() => {
      input.reportValidity();
    });

    const error = await screen.findByText(VALIDATION_MESSAGES.pattern);
    expect(input.validationMessage).toBe(error.textContent);
  });

  test("Doit afficher une erreur custom à la validation quand l'email n'est pas au bon format", async function () {
    render(<CustomPatternError />);

    const input = await screen.getByTestId<HTMLInputElement>("test-email");
    await userEvent.type(input, "test:exemple@yahoo@fr");
    act(() => {
      input.reportValidity();
    });

    const error = await screen.findByText("Le pattern ne match pas");
    expect(input.validationMessage).toBe(error.textContent);
  });
});
