import * as Stories from "../CollapseGroup.stories";
import { render, screen, waitFor } from "@testing-library/react";
import { composeStories } from "@storybook/react";
import userEvent from "@testing-library/user-event";

const { Basic } = composeStories(Stories);

describe("Components - CollapseGroup", function () {
  test("Affiche le contenu au clique du bouton", async function () {
    render(<Basic />);

    await userEvent.click(screen.getByText("Test2"));

    const text2 = screen.getByText(/Collapse Test 2/i);

    expect(text2).not.toBeNull();
  });

  test("Doit afficher le text si le CollapseGroup affiche le Collapse", async function () {
    render(<Basic />);

    const text = screen.getByText(/Collapse Test 1/i);
    expect(text).not.toBeNull();
  });
});
