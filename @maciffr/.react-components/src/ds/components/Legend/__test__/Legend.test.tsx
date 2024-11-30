import { composeStories } from "@storybook/react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import * as Stories from "../stories/Legend.stories";

const { Base, WithDescription, WithDescriptionAndFacultatif } = composeStories(Stories);
describe("Component - Legend", function () {
  it("Doit afficher le Legend", async function () {
    const { getByText } = render(<Base />);
    expect(getByText("Legend")).toBeInTheDocument();
  });

  it("Doit afficher le Legend avec une description", async function () {
    const { getByText } = render(<WithDescription />);
    expect(getByText("Legend")).toBeInTheDocument();
    expect(getByText("Description")).toBeInTheDocument();
  });

  it("Doit afficher le Legend avec une description et un flag facultatif", async function () {
    const { getByText } = render(<WithDescriptionAndFacultatif />);
    expect(getByText("Legend")).toBeInTheDocument();
    expect(getByText("Description")).toBeInTheDocument();
    expect(getByText("(facultatif)")).toBeInTheDocument();
  });
});
