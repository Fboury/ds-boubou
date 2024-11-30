import React from "react";
import "@testing-library/jest-dom";
import {render, waitFor} from "@testing-library/react";
import { composeStories } from "@storybook/react";
import * as Stories from "../StepBar.stories";
import StepBarItem, {StepStatus} from "../StepBarItem";
import {StepBarProps} from "../StepBar";

const { Desktop, Mobile } = composeStories(Stories);

describe('StepBar', function () {

    test("Doit afficher le bon nombre de sections", function () {
        const {container} = render(<Desktop/>);
        const sections = (Desktop?.args as StepBarProps)?.sections;
        const mcfStepbar = container.querySelector(".mcf-stepbar ul");

        expect(mcfStepbar?.children?.length).toEqual(sections.length);
    });

    test("Mobile - Doit afficher uniquement le titre de l'étape en cours", function () {
        const {container} = render(<Mobile/>);

        const mcfSection = container.querySelector(".mcf-section");

        expect(mcfSection?.innerHTML).toEqual((Mobile?.args as StepBarProps)?.activeSection);
    });

    test("Le lecteur d'écran ne lis pas le titre de l'étape en double (1 pour mobile, 1 pour desktop)", function () {
        const {container} = render(<Desktop/>);

        const mcfSection = container.querySelector(".mcf-section");

        expect(mcfSection?.getAttribute("aria-hidden")).toBeTruthy();
    });

    test("Doit afficher le titre de l'étape", async function () {
        const title = "test";
        const { queryByText} = render(<StepBarItem stepTitle={title} stepStatus={StepStatus.TODO} />);

        const titleText = await queryByText(title);

        await waitFor(() => expect(titleText).toBeVisible());
    });

    test("Doit avoir la propriété aria-current à false Quand l'étape est à faire", async function () {
        const title = "test";
        const { container } = render(<StepBarItem stepTitle={title} stepStatus={StepStatus.TODO} />);

        const ariaCurrent = container.querySelector("[aria-current=\"false\"]");

        await waitFor(() => expect(ariaCurrent).toBeVisible());
    });

    test("Doit afficher correctement l'étape en cours ", async function () {
        const title = "test";
        const { container } = render(<StepBarItem stepTitle={title} stepStatus={StepStatus.DOING} />);

        const active = container.querySelector(".mcf-section--active");

        await waitFor(() => expect(active).toBeVisible());
    });

    test("Doit avoir la propriété aria-current à true Quand l'étape est en cours", async function () {
        const title = "test";
        const { container } = render(<StepBarItem stepTitle={title} stepStatus={StepStatus.DOING} />);

        const ariaCurrent = container.querySelector("[aria-current=\"true\"]");

        await waitFor(() => expect(ariaCurrent).toBeVisible());
    });

    test("Doit afficher correctement l'étape terminée ", async function () {
        const title = "test";
        const { container } = render(<StepBarItem stepTitle={title} stepStatus={StepStatus.COMPLETED} />);

        const completed = container.querySelector(".mcf-section--completed");

        await waitFor(() => expect(completed).toBeVisible());
    });

    test("Doit avoir la propriété aria-current à false Quand l'étape est terminée", async function () {
        const title = "test";
        const { container } = render(<StepBarItem stepTitle={title} stepStatus={StepStatus.COMPLETED} />);

        const ariaCurrent = container.querySelector("[aria-current=\"false\"]");

        await waitFor(() => expect(ariaCurrent).toBeVisible());
    });

    test("Accessibilité - Doit énoncer si l'étape est terminée", async function () {
        const title = "test";
        const { container } = render(<StepBarItem stepTitle={title} stepStatus={StepStatus.COMPLETED} />);

        const sronly = container.querySelector(".mcf-sr-only");

        await waitFor(() => {
            expect(sronly).toBeInTheDocument();
            expect(sronly?.innerHTML).toEqual("étape validée");
        });
    });
});
