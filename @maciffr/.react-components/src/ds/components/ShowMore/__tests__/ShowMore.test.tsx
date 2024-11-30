import React from "react";
import { composeStories } from "@storybook/react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import * as Stories from "../stories/ShowMore.stories";

const { Basique, OuvertParDefaut } = composeStories(Stories);
describe("DS - Components - ShowMore", function () {
  it("Doit afficher un show more de base", async function () {
    const { getByText } = render(<Basique />);

    const button = getByText("Afficher plus");
    const content = getByText(/Lorem ipsum/);

    expect(button).toBeDefined();
    expect(content.style.maxHeight).toEqual("0");
    expect(content.className.includes("active")).not.toBeTruthy();
    expect(button.parentElement?.className.includes("mds-show-more__btn")).toBeTruthy();
  });
  it("Doit afficher un show more ouvert par défaut", async function () {
    const { getByText } = render(<OuvertParDefaut />);

    const button = getByText("Afficher moins");
    const content = getByText(/Lorem ipsum/);

    expect(button).toBeDefined();
    expect(content.className.includes("active")).toBeTruthy();
  });
});
