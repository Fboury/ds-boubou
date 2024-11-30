import * as Stories from "../stories/InputPhone.stories";
import { act, render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/react";
import { userEvent } from "@storybook/testing-library";
import { VALIDATION_MESSAGES } from "../constantes";

const { Base, Required, CustomPatternError } = composeStories(Stories);

describe("Form - InputPhone", function () {
  test("Doit formatter le champ quand l'utilisateur a finis de saisir le numéro", async function () {
    render(<Base />);
    const inputPhone = screen.getByTestId<HTMLInputElement>("test-phone");
    await userEvent.type(inputPhone, "0707070707");
    expect(inputPhone.value).toEqual("07 07 07 07 07");
  });
  test("Ne doit pas dépasser la longueur ma de 10 caractères", async function () {
    render(<Base />);
    const inputPhone = screen.getByTestId<HTMLInputElement>("test-phone");
    await userEvent.type(inputPhone, "07070  7070777777777");
    expect(inputPhone.value).toEqual("07 07 07 07 07");
  });

  test("Ne doit pas prendre les caractères alphanumériques", async function () {
    render(<Base />);
    const inputPhone = screen.getByTestId<HTMLInputElement>("test-phone");
    await userEvent.type(inputPhone, "07070aaaaaaaaa");
    expect(inputPhone.value).toEqual("07070");
  });
  test("Ne doit pas déclencher la validation si le champ n'est pas entièrement renseigné.", async function () {
    render(<Base />);
    const inputPhone = screen.getByTestId<HTMLInputElement>("test-phone");
    await userEvent.type(inputPhone, "007777");
    expect(inputPhone.getAttribute("aria-invalid")).toBe("false");
  });
  test("Doit afficher un message d'erreur si la saisie ne correspond pas au format demandé", async function () {
    render(<Base />);
    const inputPhone = screen.getByTestId<HTMLInputElement>("test-phone");
    await userEvent.type(inputPhone, "0007070707");
    expect(inputPhone.value).toEqual("00 07 07 07 07");
    inputPhone.reportValidity();
    const errorMessage = await screen.findByText(VALIDATION_MESSAGES.pattern!);
    expect(errorMessage).toBeDefined();
  });

  test("Doit afficher un message d'erreur custom si la saisie ne correspond pas au format demandé", async function () {
    render(<CustomPatternError />);
    const inputPhone = screen.getByTestId<HTMLInputElement>("test-phone");
    await userEvent.type(inputPhone, "0007070707");
    expect(inputPhone.value).toEqual("00 07 07 07 07");
    inputPhone.reportValidity();
    const errorMessage = await screen.findByText("Le pattern ne match pas");
    expect(errorMessage).toBeDefined();
  });
  test("Doit afficher un message d'erreur si le champ est requis", async function () {
    render(<Required />);
    const inputPhone = screen.getByTestId<HTMLInputElement>("test-phone");
    act(() => {
      inputPhone.reportValidity();
    });
    const errorMessage = await screen.findByText(VALIDATION_MESSAGES.required!);
    expect(errorMessage).toBeDefined();
  });

  test("Doit afficher un message d'erreur custom si le champs est requis", async function () {
    render(<CustomPatternError />);
    const inputPhone = screen.getByTestId<HTMLInputElement>("test-phone");
    act(() => {
      inputPhone.reportValidity();
    });
    const errorMessage = await screen.findByText("Le champ est requis");
    expect(errorMessage).toBeDefined();
  });
});
