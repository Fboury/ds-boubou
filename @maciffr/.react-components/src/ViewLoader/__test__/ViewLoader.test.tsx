import React from "react";
import * as Stories from "../ViewLoader.stories";
import { waitFor } from "@storybook/testing-library";
import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/react";

const { Content, Loading } = composeStories(Stories);

describe("View Loader", function () {
  test("Doit afficher le Placeholder quand il est en loading", async function () {
    render(<Loading />);

    const loading = screen.getByTestId<HTMLDivElement>("test");

    await waitFor(() => expect(loading.querySelector(".mcf-skeleton")).toBeTruthy());
    await waitFor(() => expect(loading?.textContent?.includes("Contenu à afficher")).toBeFalsy());
  });

  test("Doit afficher le Contenu quand le view loader n'est pas en loading", async function () {
    render(<Content />);

    const loading = screen.getByTestId<HTMLDivElement>("test");

    await waitFor(() => expect(loading.querySelector(".mcf-skeleton")).toBeFalsy());
    await waitFor(() => expect(loading?.textContent?.includes("Contenu à afficher")).toBeTruthy());
  });
});
