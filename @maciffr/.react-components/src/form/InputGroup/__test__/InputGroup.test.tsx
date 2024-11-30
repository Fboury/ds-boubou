import React from "react";
import * as Stories from "../InputGroup.stories";
import {act, render, screen} from "@testing-library/react";
import {composeStories} from "@storybook/react";
import userEvent from "@testing-library/user-event";

const {SuffixWithInputNumberMaxValue} = composeStories(Stories);

describe("Form - Input Group", () => {

  it("Doit afficher une erreur quand l'input dans le group n'est pas valide", async () => {
    render(<SuffixWithInputNumberMaxValue/>);
    const input = screen.getByTestId<HTMLInputElement>("input-test") as HTMLInputElement;
    await userEvent.type(input, "51");

    act(() => {
      input.reportValidity();
    });

    const errorMessage = screen.getByText("Cette valeur doit être inférieur ou égale à 50");
    expect(errorMessage.textContent).toEqual(input.validationMessage)
  });
});
