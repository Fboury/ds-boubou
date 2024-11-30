import { composeStories } from "@storybook/react";
import { act, render } from "@testing-library/react";
import "@testing-library/jest-dom";

import * as Stories from "../__stories__/Checkbox.stories";

const { Basic, TileErrorRequired } = composeStories(Stories);
describe("Component - Checkbox", function () {
  it("Doit afficher les checkbox", async function () {
    const { getByText } = render(<Basic />);
    expect(getByText("Label")).toBeInTheDocument();
    expect(getByText("Description")).toBeInTheDocument();
    expect(getByText("option 1")).toBeInTheDocument();
    expect(getByText("option 2")).toBeInTheDocument();
    expect(getByText("option 3 (disabled)")).toBeInTheDocument();
    expect(getByText("option 4 (disabled)")).toBeInTheDocument();
  });

  it("Doit afficher l'erreur du champ requis", async function () {
    const { getByText, getByTestId } = render(<TileErrorRequired />);
    const checkbox = getByText("option 1 (required)");
    await act(() => (checkbox?.parentElement?.children[0] as HTMLInputElement).reportValidity());
    expect(getByText("Ce champ est obligatoire.")).toBeInTheDocument();
  });
});
