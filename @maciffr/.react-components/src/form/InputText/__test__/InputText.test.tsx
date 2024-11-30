import React from "react";
import * as Stories from "../stories/InputText.stories";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/react";
import { act } from "react-dom/test-utils";
import { VALIDATION_MESSAGE } from "../constantes";

const { Pattern, Required, Min, Max } = composeStories(Stories);

describe("Form - Input Text", function () {
  test("Doit afficher le message d'erreur de validation par défaut de l'input Quand le champ est vide avec une contrainte required", async function () {
    render(<Required />);

    const inputText = screen.getByTestId<HTMLInputElement>("input-text");

    act(() => inputText.reportValidity());
    const error = await screen.findByText(VALIDATION_MESSAGE.required);

    expect(error.textContent).toEqual(VALIDATION_MESSAGE.required);
  });
  test("Doit avoir la propriété aria-invalid à true Quand le champ Required n'est  pas valide", async function () {
    render(<Required />);

    const inputText = screen.getByTestId<HTMLInputElement>("input-text");

    act(() => inputText.reportValidity());

    expect(inputText.getAttribute("aria-invalid")).toEqual("true");
  });
  test("Doit avoir la propriété aria-invalid à false Quand le champ Required est valide", async function () {
    render(<Required />);

    const inputText = screen.getByTestId<HTMLInputElement>("input-text");

    act(() => inputText.reportValidity());

    await userEvent.type(inputText, "staniret");

    expect(inputText.getAttribute("aria-invalid")).toEqual("false");
  });
  test("Doit afficher un message d'erreur quand la valeur du champ n'est pas au bon format", async function () {
    render(<Pattern />);

    const inputText = screen.getByTestId<HTMLInputElement>("input-text");

    await userEvent.type(inputText, "-?#");

    act(() => inputText.reportValidity());
    const errorMessage = screen.getByText(VALIDATION_MESSAGE.pattern);

    expect(errorMessage.textContent).toEqual(VALIDATION_MESSAGE.pattern);
  });

  test("Doit avoir la propriété aria-invalid à true Quand le champ Pattern n'est pas valide", async function () {
    render(<Pattern />);

    const inputText = screen.getByTestId<HTMLInputElement>("input-text");

    await userEvent.type(inputText, "-?;#");

    act(() => inputText.reportValidity());

    expect(inputText.getAttribute("aria-invalid")).toEqual("true");
  });

  test("Doit avoir la propriété aria-invalid à false Quand le champ Pattern est valide", async function () {
    render(<Pattern />);

    const inputText = screen.getByTestId<HTMLInputElement>("input-text");

    await userEvent.type(inputText, "-?#");

    act(() => inputText.reportValidity());

    await userEvent.clear(inputText);
    await userEvent.type(inputText, "0123");

    expect(inputText.getAttribute("aria-invalid")).toEqual("false");
  });
});
