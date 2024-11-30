import React from "react";
import { composeStories } from "@storybook/react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import * as Stories from "../stories/Link.stories";

const { Basic, Size, Icon, IconRight, OnlyIcon, Reverse, Standalone } = composeStories(Stories);
describe("Components - Link", function () {
  it("Doit afficher un lien de base", async function () {
    const { getByTestId } = render(<Basic />);

    const link = getByTestId("link");

    expect(link.className.includes("mds-link")).toBeTruthy();
    expect(link.className.includes("mds-text--3")).toBeTruthy();
  });

  it("Doit afficher un lien standalone", async function () {
    const { getByTestId } = render(<Standalone />);

    const link = getByTestId("link");

    expect(link.className.includes("mds-link")).toBeTruthy();
    expect(link.className.includes("mds-text--3")).toBeTruthy();
    expect(link.className.includes("mds-link--standalone")).toBeTruthy();
  });

  it("Doit afficher un lien reverse", async function () {
    const { getByTestId } = render(<Reverse />);

    const link = getByTestId("link");

    expect(link.className.includes("mds-link")).toBeTruthy();
    expect(link.className.includes("mds-text--3")).toBeTruthy();
    expect(link.className.includes("mds-link--reverse")).toBeTruthy();
  });

  it("Doit afficher un lien d'une size différente", async function () {
    const { getByTestId } = render(<Size />);

    const link = getByTestId("link");

    expect(link.className.includes("mds-link")).toBeTruthy();
    expect(link.className.includes("mds-text--2")).toBeTruthy();
  });

  it("Doit afficher un lien avec une icône", async function () {
    const { getByTestId } = render(<Icon />);

    const link = getByTestId("link");

    expect(link.className.includes("mds-link")).toBeTruthy();
    expect(link.className.includes("mds-text--3")).toBeTruthy();
    expect(link.className.includes("mds-icon__chevron-right")).toBeTruthy();
  });

  it("Doit afficher un lien avec une icône droite", async function () {
    const { getByTestId } = render(<IconRight />);

    const link = getByTestId("link");

    expect(link.className.includes("mds-link")).toBeTruthy();
    expect(link.className.includes("mds-text--3")).toBeTruthy();
    expect(link.className.includes("mds-icon__chevron-right--right")).toBeTruthy();
  });

  it("Doit afficher un lien avec une icône uniquement", async function () {
    const { getByTestId } = render(<OnlyIcon />);

    const link = getByTestId("link");

    expect(link.className.includes("mds-link")).toBeTruthy();
    expect(link.className.includes("mds-text--3")).toBeTruthy();
    expect(link.className.includes("mds-icon__chevron-right")).toBeTruthy();
    expect(link.className.includes("mds-link__icon-only")).toBeTruthy();
  });
});
