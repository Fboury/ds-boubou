import { composeStories } from "@storybook/react";
import { act, render } from "@testing-library/react";
import "@testing-library/jest-dom";

import * as Stories from "../__stories__/RadioButton.stories";

const { Basic, Tile } = composeStories(Stories);
describe("Component - RadioButton", function () {
  it("Doit afficher les radio buttons", async function () {
    const { getByText } = render(<Basic />);
    expect(getByText("Description")).toBeInTheDocument();
    expect(getByText("Texte")).toBeInTheDocument();
    expect(getByText("Texte un peu plus long")).toBeInTheDocument();
  });

  it("Doit afficher l'erreur du champ requis", async function () {
    const { getByText, getByTestId } = render(<Tile />);
    const radio = getByTestId("test-radio");
    await act(() => (radio as HTMLInputElement).reportValidity());
    expect(getByText("Ce champ est obligatoire.")).toBeInTheDocument();
  });

  it("Doit afficher une erreur custom pour le champ requis", async function () {
    const errorMesssage = "Custom required error";
    const { getByText, getByTestId } = render(<Tile messageErrorRequired={errorMesssage} />);
    const radio = getByTestId("test-radio");
    await act(() => (radio as HTMLInputElement).reportValidity());
    expect(getByText(errorMesssage)).toBeInTheDocument();
  });
});
