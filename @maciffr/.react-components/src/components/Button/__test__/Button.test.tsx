import React from "react";
import * as Stories from "../Button.stories";
import {waitFor} from "@storybook/testing-library";
import {render, screen} from "@testing-library/react";
import {composeStories} from "@storybook/react";

const {Basic, Icon, Disabled, Submit} = composeStories(Stories);

describe('Components - Button', function () {
    test("Doit afficher le bouton avec un texte", async function () {
        render(<Basic/>);

        const button = screen.getByTestId<HTMLInputElement>('test');
        await waitFor(() => expect(button?.textContent?.includes("Test")).toBeTruthy());
    });

    test("Doit avoir le type button par défaut", async function () {
        render(<Basic/>);

        const button = screen.getByTestId<HTMLInputElement>('test');
        await waitFor(() => expect(button.getAttribute("type") === "button").toBeTruthy());
    });

    test("Doit afficher le bouton avec une icône", async function () {
        render(<Icon/>);

        const button = screen.getByTestId<HTMLInputElement>('test');
        await waitFor(() => expect(button.querySelector(".icon-md-quizz-reglementation")).toBeTruthy());
    });
    test("Doit afficher le bouton désactivé", async function () {
        render(<Disabled/>);

        const disabledButton = screen.getByTestId<HTMLInputElement>('test');
        await waitFor(() => expect(disabledButton.hasAttribute("disabled")).toBeTruthy());
    });

    test("Doit avoir le type submit", async function () {
        render(<Submit/>);

        const button = screen.getByTestId<HTMLInputElement>('test');
        await waitFor(() => expect(button.getAttribute("type") === "submit").toBeTruthy());
    });
});
