import "@testing-library/jest-dom";
import {composeStories} from "@storybook/react";
import {fireEvent, render} from "@testing-library/react";
import * as Stories from "../stories/AutoComplete.stories";
import {MOCK_SUGGESTION_LIST} from "../mocks/SuggestionList";

const {Base, WithHeader, WithHeaderHtml, Erreur} = composeStories(Stories);

describe("AutoComplete", function () {
    it("Affichage", async () => {
        // Render
        const {container, findByRole} = render(<Base />);

        // Test
        expect(await findByRole("combobox")).toBeInTheDocument();
        expect(container.querySelector("#suggestion-wrapper")).toBeInTheDocument();
    });

    it("Affiche la liste de recherche", async () => {
        const mockSearchItems = jest.fn();
        // Render
        const {findByRole, container, findByText} = render(
            <Base options={MOCK_SUGGESTION_LIST} onSelect={mockSearchItems} />
        );

        const input = await findByRole("combobox");
        fireEvent.change(input, {target: {value: "Texte"}});
        // Test
        expect(await findByRole("combobox")).toBeInTheDocument();
        expect(container.querySelector("#suggestion-wrapper")).toHaveClass("show");
        expect(await findByText("2 suggestions")).toBeInTheDocument();
    });

    it("Sélection d'un élément dans la liste", async () => {
        // Init
        const mockSearchItems = jest.fn();
        const mockSelectItem = jest.fn();
        // Render
        const {findByRole, findByText, container} = render(
            <Base onSelect={mockSelectItem} onSearch={mockSearchItems} />
        );

        const input = await findByRole("combobox");
        expect(mockSearchItems).toHaveBeenCalledTimes(0);
        fireEvent.change(input, {target: {value: "Texte"}});
        expect(mockSearchItems).toHaveBeenCalledTimes(1);
        const firstItem = await findByText("Agriculteur");
        fireEvent.click(firstItem);
        // Test
        expect(await findByRole("combobox")).toHaveValue("Agriculteur");
        expect(container.querySelector("#suggestion-wrapper")).not.toHaveClass("show");
        expect(mockSelectItem).toHaveBeenCalledWith(MOCK_SUGGESTION_LIST[0]);
    });

    it("Affichage du composant en erreur", async () => {
        // Render
        const {findByText} = render(<Erreur />);

        // Test
        expect(await findByText("Veuillez préciser votre activité")).toBeInTheDocument();
    });

    it("Affichage d'une valeur par défaut", async () => {
        // Init
        const defaultValue = {key: "C4", value: "Boucherie"};
        // Render
        const {findByRole, container} = render(
            <Base defaultValue={defaultValue} />
        );

        const input = await findByRole("combobox");
        // Test
        expect(input).toHaveValue("Boucherie");
        expect(container.querySelector("#suggestion-wrapper")).not.toHaveClass("show");
    });

    it("Affichage du bandeau dans les suggestions lorsqu'une description est renseignée", async () => {
        // Render
        const {findByRole, findByText} = render(
            <WithHeader options={MOCK_SUGGESTION_LIST} description={"Test description"} />
        );
        const input = await findByRole("combobox");
        fireEvent.change(input, {target: {value: "Texte"}});
        const header = await findByText("Test description");

        // Test
        expect(header).toBeInTheDocument();
    });

    it("Affichage du bandeau dans les suggestions lorsqu'une description en HTML est renseignée", async () => {
        // Render
        const {findByRole, findByText} = render(
            <WithHeaderHtml options={MOCK_SUGGESTION_LIST} description={(<strong>Test description</strong>)} />
        );
        const input = await findByRole("combobox");
        fireEvent.change(input, {target: {value: "Texte"}});
        const header = await findByText("Test description");

        // Test
        expect(header).toBeInTheDocument();
    });

    describe("Navigation par le clavier", function () {
        it("Sélection d'un élément dans la liste via clavier (ENTER)", async () => {
            // Init
            const mockSearchItems = jest.fn();
            const mockSelectItem = jest.fn();
            // Render
            const {findByRole, container} = render(
                <Base onSelect={mockSelectItem} onSearch={mockSearchItems} />
            );

            const input = await findByRole("combobox");
            expect(mockSearchItems).toHaveBeenCalledTimes(0);
            fireEvent.change(input, {target: {value: "Texte"}});
            expect(mockSearchItems).toHaveBeenCalledTimes(1);
            fireEvent.keyDown(input, {key: "Enter", code: "Enter", charCode: 13});
            // Test
            expect(await findByRole("combobox")).toHaveValue("Agriculteur");
            expect(container.querySelector("#suggestion-wrapper")).not.toHaveClass("show");
            expect(mockSelectItem).toHaveBeenCalledWith(MOCK_SUGGESTION_LIST[0]);
        });

        it("Activation d'un élément dans la liste via flèche du bas", async () => {
            // Init
            const mockSelectItem = jest.fn();
            // Render
            const {findByRole, findByText} = render(
                <Base onSelect={mockSelectItem} />
            );

            // Test
            const input = await findByRole("combobox");
            fireEvent.change(input, {target: {value: "Texte"}});
            fireEvent.keyDown(input, {key: "ArrowDown"});
            const selectedItem = await findByText("Menuisier");
            expect(selectedItem).toHaveClass("active");
        });

        it("Masque la liste lors de la touche Echap", async () => {
            // Init
            const mockSelectItem = jest.fn();
            // Render
            const {findByRole, container} = render(
                <Base onSelect={mockSelectItem} />
            );

            // Test
            const input = await findByRole("combobox");
            fireEvent.change(input, {target: {value: "Texte"}});
            expect(container.querySelector("#suggestion-wrapper")).toHaveClass("show");
            fireEvent.keyDown(input, {key: "Escape"});
            expect(container.querySelector("#suggestion-wrapper")).not.toHaveClass("show");
        });

        it("Activation d'un élément dans la liste via flèche du haut", async () => {
            // Init
            const mockSelectItem = jest.fn();
            // Render
            const {findByRole, findByText} = render(
                <Base onSelect={mockSelectItem} />
            );

            // Test
            const input = await findByRole("combobox");
            fireEvent.change(input, {target: {value: "Texte"}});
            fireEvent.keyDown(input, {key: "ArrowUp"});
            const selectedItem = await findByText("Menuisier");
            expect(selectedItem).toHaveClass("active");
        });
    });
});
