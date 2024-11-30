import React from "react";
import { composeStories } from "@storybook/react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import * as Stories from "../stories/StepIndicator.stories";

const { Basic, BasicLastStep } = composeStories(Stories);

describe("Component - StepIndicator", function () {
  it("Doit afficher le stepper basique", function () {
    const { getAllByText, getByText } = render(<Basic />);
    expect(getAllByText("Commune de résidence")).toHaveLength(1);
    expect(getAllByText("Informations personnelles")).toHaveLength(2);
    expect(getAllByText("Consentements")).toHaveLength(1);
    expect(getByText("Commune de résidence").parentNode).toHaveClass("mds-step-indicator__item--complete");
    expect(getAllByText("Informations personnelles")[1].parentNode).toHaveClass("mds-step-indicator__item--current");
    expect(getByText("Consentements").parentNode).toHaveClass("mds-step-indicator__item");
  });
  it("Doit afficher 2 étapes en complete", function () {
    const { getAllByText, getByText } = render(<BasicLastStep />);
    expect(getAllByText("Commune de résidence")).toHaveLength(1);
    expect(getAllByText("Informations personnelles")).toHaveLength(1);
    expect(getAllByText("Consentements")).toHaveLength(2);
    expect(getByText("Commune de résidence").parentNode).toHaveClass("mds-step-indicator__item--complete");
    expect(getByText("Informations personnelles").parentNode).toHaveClass("mds-step-indicator__item--complete");
    expect(getAllByText("Consentements")[1].parentNode).toHaveClass("mds-step-indicator__item--current");
  });
});
