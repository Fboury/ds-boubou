import React from "react";
import * as Stories from "../Loader.stories";
import {composeStories} from "@storybook/react";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";

const { Basic } = composeStories(Stories);

describe("Composants - Loader", () => {

  it("Doit avoir le Loader d'afficher", () => {
      render(<Basic/>);

      const loader = screen.getByTestId("test");
      expect(loader).toBeVisible();
  })

});
