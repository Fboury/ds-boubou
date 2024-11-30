import { composeStories } from "@storybook/react";
import { act, render } from "@testing-library/react";
import "@testing-library/jest-dom";

import * as Stories from "../stories/Autocomplete.stories";
import userEvent from "@testing-library/user-event";
import { VALIDATION_MESSAGES } from "../constantes";

const { Base, WithValue, Required, WithPolite, WithResult, WithLoader, WithInfo } = composeStories(Stories);
describe("Form - Autocomplete", function () {
  it("Doit afficher un input text vide avec les bons attributs", async function () {
    const { getByTestId } = render(<Base />);

    const input = getByTestId("test-input");
    expect(input).toBeInTheDocument();
    expect(input.getAttribute("aria-autocomplete")).toEqual("list");
    expect(input.getAttribute("role")).toEqual("combobox");
  });

  it("Doit afficher les resultats au focus", async function () {
    const { getByTestId, getByText } = render(<WithResult />);

    const input = getByTestId("test-input");
    await act(() => userEvent.type(input, "1"));
    expect(getByText("Texte résultat 1")).toBeInTheDocument();
  });

  it("Doit afficher les resultats au focus de l'input", async function () {
    const { getByTestId, getByText } = render(<WithResult />);

    const input = getByTestId("test-input");
    await act(() => userEvent.type(input, "1"));
    expect(getByText("Texte résultat 1")).toBeInTheDocument();
  });

  it("Doit afficher le premier résultat selectionné au focus de l'input", async function () {
    const { getByTestId, getByText } = render(<WithResult />);

    const input = getByTestId("test-input");
    await act(() => userEvent.type(input, "1"));
    const item = getByText("Texte résultat 1").parentElement;
    expect(item?.getAttribute("aria-selected")).toEqual("true");
  });

  it("Doit cacher les resultats au unfocus de l'input", async function () {
    const { getByTestId, queryByText } = render(<WithResult />);

    const input = getByTestId("test-input");
    await act(() => userEvent.type(input, "1"));
    expect(queryByText("Texte résultat 1")).toBeInTheDocument();
    act(() => input.blur());
    expect(queryByText("Texte résultat 1")).not.toBeInTheDocument();
  });

  it("Doit cacher les resultats a l'appuie de la touche Echap", async function () {
    const { getByTestId, queryByText } = render(<WithResult />);

    const input = getByTestId("test-input");
    await act(() => userEvent.type(input, "1"));
    expect(queryByText("Texte résultat 1")).toBeInTheDocument();
    await act(() => userEvent.keyboard("[Escape]"));
    expect(queryByText("Texte résultat 1")).not.toBeInTheDocument();
  });

  it("Doit naviguer sur l'item deux via la flèche du bas", async function () {
    const { getByTestId, getByText } = render(<WithResult />);

    const input = getByTestId("test-input");
    await act(() => userEvent.type(input, "1"));
    const firstItem = getByText("Texte résultat 1").parentElement;
    const secondItem = getByText("Texte résultat 2").parentElement;
    expect(firstItem?.getAttribute("aria-selected")).toEqual("true");
    expect(secondItem?.getAttribute("aria-selected")).toEqual("false");
    await act(() => userEvent.keyboard("[ArrowDown]"));
    expect(firstItem?.getAttribute("aria-selected")).toEqual("false");
    expect(secondItem?.getAttribute("aria-selected")).toEqual("true");
  });

  it("Doit naviguer sur le dernière item via la flèche du haut", async function () {
    const { getByTestId, getByText } = render(<WithResult />);

    const input = getByTestId("test-input");
    await act(() => userEvent.type(input, "1"));
    const firstItem = getByText("Texte résultat 1").parentElement;
    const lastItem = getByText("Texte résultat 3").parentElement;
    expect(firstItem?.getAttribute("aria-selected")).toEqual("true");
    expect(lastItem?.getAttribute("aria-selected")).toEqual("false");
    await act(() => userEvent.keyboard("[ArrowUp]"));
    expect(firstItem?.getAttribute("aria-selected")).toEqual("false");
    expect(lastItem?.getAttribute("aria-selected")).toEqual("true");
  });

  it("Doit afficher la valeur au clique", async function () {
    const { getByTestId, getByText } = render(<WithResult />);

    const input = getByTestId("test-input");
    await act(() => userEvent.type(input, "1"));
    const item = getByText("Texte résultat 2").parentElement;
    await act(() => userEvent.click(item!));
    expect((input as HTMLInputElement).value).toEqual("Texte résultat 2");
  });

  it("Doit afficher la valeur à la selection avec la touche Entrer", async function () {
    const { getByTestId } = render(<WithResult />);

    const input = getByTestId("test-input");
    await act(() => userEvent.type(input, "1"));
    await act(() => userEvent.keyboard("[ArrowDown]"));
    await act(() => userEvent.keyboard("[Enter]"));
    expect((input as HTMLInputElement).value).toEqual("Texte résultat 2");
  });

  it("Doit afficher un loader", async function () {
    const { getByTestId, getByText } = render(<WithLoader />);

    const input = getByTestId("test-input");
    await act(() => userEvent.type(input, "1"));
    expect(getByText("Recherche en cours...")).toBeInTheDocument();
  });

  it("Doit afficher des informations en haut des suggestions", async function () {
    const { getByTestId, getByText } = render(<WithInfo />);

    const input = getByTestId("test-input");
    await act(() => userEvent.type(input, "1"));
    expect(getByText("Voir tous les résultats")).toBeInTheDocument();
  });

  it("Doit afficher le premier résultat en selected et non l'information", async function () {
    const { getByTestId, getByText } = render(<WithInfo />);

    const input = getByTestId("test-input");
    await act(() => userEvent.type(input, "1"));
    const firstItem = getByText("Texte résultat 1").parentElement;
    expect(firstItem?.getAttribute("aria-selected")).toEqual("true");
  });

  it("Doit selection le dernière element via la flèche du haut et non l'information", async function () {
    const { getByTestId, getByText } = render(<WithInfo />);

    const input = getByTestId("test-input");
    await act(() => userEvent.type(input, "1"));
    await act(() => userEvent.keyboard("[ArrowUp]"));
    const lastElement = getByText("Texte résultat 3").parentElement;
    expect(lastElement?.getAttribute("aria-selected")).toEqual("true");
  });

  it("Doit selection le première element via la flèche du bas et non l'information", async function () {
    const { getByTestId, getByText } = render(<WithInfo />);

    const input = getByTestId("test-input");
    await act(() => userEvent.type(input, "1"));
    await act(() => userEvent.keyboard("[ArrowDown]"));
    await act(() => userEvent.keyboard("[ArrowDown]"));
    await act(() => userEvent.keyboard("[ArrowDown]"));
    const lastElement = getByText("Texte résultat 1").parentElement;
    expect(lastElement?.getAttribute("aria-selected")).toEqual("true");
  });

  it("Doit afficher le nombre d'éléments afficher dans le DOM via aria-polite", async function () {
    const { getByText } = render(<WithPolite />);

    expect(getByText("3 éléments affichés sur 10.")).toBeInTheDocument();
  });

  it("Doit afficher une erreur si le champ est requis n'est pas rempli", async function () {
    const { getByTestId, getByText } = render(<Required />);

    const input = getByTestId("test-input");
    await act(() => (input as HTMLInputElement).reportValidity());

    expect(getByText(VALIDATION_MESSAGES.required)).toBeInTheDocument();
  });

  it("Doit afficher l'autocomplete rempli", async function () {
    const { getByTestId } = render(<WithValue />);

    const input = getByTestId("test-input");

    expect((input as HTMLInputElement).value).toEqual("Texte Valeur");
  });
});
