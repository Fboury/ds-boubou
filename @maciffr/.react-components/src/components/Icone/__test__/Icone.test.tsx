import React from "react";
import * as Stories from "../Icone.stories";
import {render, screen} from "@testing-library/react";
import { composeStories } from "@storybook/react";

const { Basic } = composeStories(Stories);

describe("Components - Icone", function () {
    test("Doit afficher la bonne icône", async () => {
        render(<Basic />);

        const icone = screen.getByTestId<HTMLInputElement>('test');

        expect(icone.className.includes("icon-sinistre-inondation")).toBeTruthy();
    });
});
