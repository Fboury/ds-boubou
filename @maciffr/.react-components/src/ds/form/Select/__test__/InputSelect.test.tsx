import { composeStories } from "@storybook/react";
import { act, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import * as Stories from "../stories/InputSelect.stories";
import { VALIDATION_MESSAGES } from "../constantes";

const { Base, RequiredError, CustomError } = composeStories(Stories);
describe("Form - Select", function () {
  it("Doit afficher un input vide", async function () {
    render(<Base />);

    const input = await screen.getByTestId("test-select");
    const optionUnselected = await screen.findByText("Sélectionnez");

    expect(input).toBeInTheDocument();
    expect(optionUnselected).toBeVisible();
  });

  it("Doit afficher une erreur à la validation quand aucun choix n'a été fait", async function () {
    const { getByText } = render(<RequiredError />);

    const input = await screen.getByTestId<HTMLInputElement>("test-select");
    act(() => {
      input.reportValidity();
    });

    expect(getByText(VALIDATION_MESSAGES.required)).toBeInTheDocument();
  });

  it("Doit afficher une erreur custom à l'affichage du composant - liste vide", async function () {
    render(<CustomError />);

    const input = await screen.getByTestId<HTMLInputElement>("test-select");

    const error = await screen.findByText("Problème technique à la récupération des valeurs.");
    expect(error).toBeVisible();
  });
});
