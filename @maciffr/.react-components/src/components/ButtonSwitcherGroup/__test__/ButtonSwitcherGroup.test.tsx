import React from "react";
import * as Stories from "../ButtonSwitcherGroup.stories";
import "@testing-library/jest-dom";
import {act, render, screen} from "@testing-library/react";
import { composeStories } from "@storybook/react";
import {userEvent} from "@storybook/testing-library";

const {Base, Erreur, ErreurPersonnalise} = composeStories(Stories);

describe("Form - Button Switcher Group", function () {
  it("Doit afficher les boutons sans aucun choix selectionné", function () {
    const {container} = render(<Base/>);

    const switcherButtons = container.querySelectorAll("input");

    expect(switcherButtons.length).toEqual(2);
  });
  it("Doit checker le bouton sur lequel on clique", async function () {
    const {container} = render(<Base/>);

    const switcherButtons = container.querySelectorAll("input");
    const activeButton = switcherButtons[0];
    await userEvent.click(activeButton);
    const inactiveButton = switcherButtons[1];
    expect(activeButton).toBeChecked();
    expect(inactiveButton).not.toBeChecked();
  });
  it("Doit afficher une erreur si rien n'est sélectionné à la validation", async function () {
    const { getByText, getByTestId } = render(<Erreur />);
    const radio = getByTestId("tunnel-civilite-1");
    await act(() => (radio as HTMLInputElement).reportValidity());
    expect(getByText("Ce champ est obligatoire.")).toBeInTheDocument();
  });
  it("Doit afficher une erreur personnalisée si rien n'est sélectionné à la validation", async function () {
    const { getByText, getByTestId } = render(<ErreurPersonnalise />);
    const radio = getByTestId("tunnel-civilite-1");
    await act(() => (radio as HTMLInputElement).reportValidity());
    expect(getByText("Cette erreur est personnalisée")).toBeInTheDocument();
  });
});
