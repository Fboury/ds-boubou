import * as Stories from "../stories/InputEmail.stories";
import { act, render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/react";
import { userEvent } from "@storybook/testing-library";
import { VALIDATION_MESSAGES } from "../constantes";

const { Base, Required, CustomPatternError } = composeStories(Stories);

describe("Form - InputEmail", function () {

  test("Doit afficher un message d'erreur si la saisie ne correspond pas au format demandé", async function () {
    render(<Base />);
    const inputEmail = screen.getByTestId<HTMLInputElement>("test-email");
    await userEvent.type(inputEmail, "0007070707");
    expect(inputEmail.value).toEqual("0007070707");
    inputEmail.reportValidity();
    const errorMessage = await screen.findByText(VALIDATION_MESSAGES.pattern!);
    expect(errorMessage).toBeDefined();
  });

  test("Doit afficher un message d'erreur custom si la saisie ne correspond pas au format demandé", async function () {
    render(<CustomPatternError />);
    const inputEmail = screen.getByTestId<HTMLInputElement>("test-email");
    await userEvent.type(inputEmail, "0007070707");
    expect(inputEmail.value).toEqual("0007070707");
    inputEmail.reportValidity();
    const errorMessage = await screen.findByText("Le pattern ne match pas");
    expect(errorMessage).toBeDefined();
  });

  test("Doit afficher un message d'erreur si le champ est requis", async function () {
    render(<Required />);
    const inputEmail = screen.getByTestId<HTMLInputElement>("test-email");
    act(() => {
      inputEmail.reportValidity();
    });
    const errorMessage = await screen.findByText(VALIDATION_MESSAGES.required!);
    expect(errorMessage).toBeDefined();
  });

  test("Doit afficher un message d'erreur custom si le champs est requis", async function () {
    render(<CustomPatternError />);
    const inputEmail = screen.getByTestId<HTMLInputElement>("test-email");
    act(() => {
      inputEmail.reportValidity();
    });
    const errorMessage = await screen.findByText("Le champ est requis");
    expect(errorMessage).toBeDefined();
  });
});
