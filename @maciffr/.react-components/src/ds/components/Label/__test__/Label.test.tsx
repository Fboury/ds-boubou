import { composeStories } from "@storybook/react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import * as Stories from "../stories/Label.stories";

const { Base, WithDescription, WithDescriptionAndFacultatif } = composeStories(Stories);
describe("Component - Label", function () {
  it("Doit afficher le Label", async function () {
    const { getByText } = render(<Base />);
    expect(getByText("Label")).toBeInTheDocument();
  });

  it("Doit afficher le Label avec une description", async function () {
    const { getByText } = render(<WithDescription />);
    expect(getByText("Label")).toBeInTheDocument();
    expect(getByText("Description")).toBeInTheDocument();
  });

  it("Doit afficher le Label avec une description et un flag facultatif", async function () {
    const { getByText } = render(<WithDescriptionAndFacultatif />);
    expect(getByText("Label")).toBeInTheDocument();
    expect(getByText("Description")).toBeInTheDocument();
    expect(getByText("(facultatif)")).toBeInTheDocument();
  });
});
