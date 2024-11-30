import React from "react";
import * as Stories from "../SelectableChoice.stories";
import {composeStories} from "@storybook/react";
import {render, screen, waitFor} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {act} from "react-dom/test-utils";

const {Required} = composeStories(Stories)

describe("Form - Selectable Choice", function () {
   test("Doit afficher le message d'erreur par défaut quand aucuns choix n'est sélectionné et que le champ est obligatoire", async function() {
       render(<Required/>);

       const form = screen.getByTestId<HTMLInputElement>('selectable-test');
       const errorMessage = screen.getByRole('alert');

       act(() => form.reportValidity());

       await waitFor(() => expect(errorMessage.textContent).toEqual(form.validationMessage));

   });

    test("Doit avoir la propriété aria-invalid à true Quand le champ Required n'est pas valide", async function () {
        render(<Required/>);

        const form = screen.getByTestId<HTMLInputElement>('form-test');
        const selectableChoice = screen.getByTestId<HTMLInputElement>('test');

        act(() => form.reportValidity());

        await waitFor(() => expect(selectableChoice.getAttribute('aria-invalid')).toEqual('true'));
    });

    test("Doit avoir la propriété aria-invalid à false Quand le champ Required est valide", async function () {
        render(<Required/>);

        const selectableChoice = screen.getByTestId<HTMLInputElement>('test');
        const choice1 = screen.getByTestId<HTMLInputElement>('selectable-test');

        await userEvent.click(choice1)

        act(() => selectableChoice.reportValidity());

        await waitFor(() => expect(selectableChoice.getAttribute('aria-invalid')).toEqual('false'));
    });
});
