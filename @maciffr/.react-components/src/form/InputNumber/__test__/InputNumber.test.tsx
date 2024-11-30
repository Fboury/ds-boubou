import React from "react";
import * as Stories from "../stories/InputNumber.stories";
import userEvent from "@testing-library/user-event";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { composeStories } from "@storybook/react";
import { act } from "react-dom/test-utils";

const { Basic } = composeStories(Stories);

describe("Form - Input Number", () => {
  it("Doit garder la saisie lorsque l'on saisit des nombres positifs sans valeur maximum", async () => {
    render(<Basic />);
    const input = screen.getByTestId<HTMLInputElement>("test") as HTMLInputElement;
    await userEvent.type(input, "123");
    expect(input.value).toBe("123");
  });

  it("Doit garder la saisie lorsque l'on saisit des nombres négatifs sans valeur minimum", async () => {
    render(<Basic />);
    const input = screen.getByTestId<HTMLInputElement>("test") as HTMLInputElement;
    await userEvent.type(input, "-123");
    expect(input.value).toBe("-123");
  });

  it("Doit renvoyer une chaine de caractère vide lorsque l'on saisit des caractères non numériques", async () => {
    render(<Basic />);
    const input = screen.getByTestId<HTMLInputElement>("test") as HTMLInputElement;
    await userEvent.type(input, "sdfa");
    expect(input.value).toBe("");
  });

  it("Doit renvoyer une valeur de type number lorsque la saisie est valide", async () => {
    let actual: number | null = null;

    render(
      <Basic
        onChange={(value: number | null) => {
          actual = value;
        }}
      />
    );
    const input = screen.getByTestId<HTMLInputElement>("test") as HTMLInputElement;
    await userEvent.type(input, "123");

    expect(actual).toBe(123);
  });

  it("Doit renvoyer une valeur null lorsque la saisie n'est pas valide", async () => {
    let actual: number | null = 1;

    render(<Basic onChange={(value: number | null) => (actual = value)} max={100} />);

    const input = screen.getByTestId<HTMLInputElement>("test") as HTMLInputElement;

    await userEvent.type(input, "101");

    expect(actual).toBeNull();
  });

  it("Doit afficher la valeur quand on saisie une valeur par défaut", () => {
    render(<Basic defaultValue={-123} />);
    const input = screen.getByTestId<HTMLInputElement>("test") as HTMLInputElement;
    expect(input.value).toBe("-123");
  });

  it("Doit renvoyer une erreur lorsque l'on saisit une valeur en dessous de la limite", async () => {
    render(<Basic min={10} />);
    const input = screen.getByTestId<HTMLInputElement>("test") as HTMLInputElement;

    await userEvent.type(input, "9");

    let validity = true;

    act(() => (validity = input.reportValidity()));

    expect(validity).toBeFalsy();
  });

  it("Doit renvoyer une erreur lorsque l'on saisit une valeur au dessus de la limite", async () => {
    render(<Basic max={10} />);
    const input = screen.getByTestId<HTMLInputElement>("test") as HTMLInputElement;
    await userEvent.type(input, "11");

    act(() => {
      const validity = input.reportValidity();
      expect(validity).toBeFalsy();
    });
  });

  it("Doit incrémenter de 1 lorsque l'on appuie sur flèche du haut", () => {
    render(<Basic />);
    const input = screen.getByTestId<HTMLInputElement>("test") as HTMLInputElement;
    fireEvent.keyDown(input, { key: "ArrowUp" });
    expect(input.value).toBe("1");
  });

  it("Doit incrémenter de 1 lorsque l'on appuie sur flèche du haut avec une valeur déjà renseignée", () => {
    render(<Basic defaultValue={5} />);
    const input = screen.getByTestId<HTMLInputElement>("test") as HTMLInputElement;
    fireEvent.keyDown(input, { key: "ArrowUp" });
    expect(input.value).toBe("6");
  });

  it("Doit décrémenter de 1 lorsque l'on appuie sur flèche du bas", () => {
    render(<Basic />);
    const input = screen.getByTestId<HTMLInputElement>("test") as HTMLInputElement;
    fireEvent.keyDown(input, { key: "ArrowDown" });
    expect(input.value).toBe("-1");
  });

  it("Doit décrémenter de 1 lorsque l'on appuie sur flèche du bas avec une valeur déjà renseignée", () => {
    render(<Basic defaultValue={-0} />);
    const input = screen.getByTestId<HTMLInputElement>("test") as HTMLInputElement;
    fireEvent.keyDown(input, { key: "ArrowDown" });
    expect(input.value).toBe("-1");
  });

  it("Doit garder la valeur actuelle lorsque l'on appuis sur flèche du haut et que cela dépasse la valeur maximum", () => {
    render(<Basic max={5} defaultValue={5} />);
    const input = screen.getByTestId<HTMLInputElement>("test") as HTMLInputElement;
    fireEvent.keyDown(input, { key: "ArrowUp" });
    expect(input.value).toBe("5");
  });

  it("Doit garder la valeur actuelle lorsque l'on appuis sur flèche du bas et que cela dépasse la valeur minimum", () => {
    render(<Basic min={-5} defaultValue={-5} />);
    const input = screen.getByTestId<HTMLInputElement>("test") as HTMLInputElement;
    fireEvent.keyDown(input, { key: "ArrowDown" });
    expect(input.value).toBe("-5");
  });

  it("Doit renseigner la valeur minimum lorsque l'on appuis sur flèche du bas et que le minimum est 0", () => {
    render(<Basic min={0} />);
    const input = screen.getByTestId<HTMLInputElement>("test") as HTMLInputElement;
    fireEvent.keyDown(input, { key: "ArrowDown" });
    expect(input.value).toBe("0");
  });

  it("Doit renseigner la valeur maximum lorsque l'on appuis sur flèche du haut et que le maximum est 0", () => {
    render(<Basic max={0} />);
    const input = screen.getByTestId<HTMLInputElement>("test") as HTMLInputElement;
    fireEvent.keyDown(input, { key: "ArrowUp" });
    expect(input.value).toBe("0");
  });

  it("Doit formatter la valeur affiché lorsque l'on saisi de gros nombres", () => {
    render(<Basic defaultValue={7500000} format />);
    const input = screen.getByTestId<HTMLInputElement>("test") as HTMLInputElement;
    expect(input.value).toBe("7 500 000");
  });

  it("Doit afficher une erreur custom lorsque le paramètre validationMessage.required est renseigné et que la valeur est obligatoire", () => {
    render(<Basic validationMessages={{ required: "Veuillez renseigner une valeur." }} required />);
    const input = screen.getByTestId<HTMLInputElement>("test") as HTMLInputElement;
    act(() => input.reportValidity());
    expect(input.validationMessage).toBe("Veuillez renseigner une valeur.");
  });

  it("Doit afficher une erreur custom lorsque le paramètre validationMessage.pattern est renseigné et que l'utilisateur saisi uniquement un -", async () => {
    render(<Basic validationMessages={{ pattern: "Le format n'est pas bon." }} required />);
    const input = screen.getByTestId<HTMLInputElement>("test") as HTMLInputElement;
    await userEvent.type(input, "-");

    act(() => input.reportValidity());

    await waitFor(() => expect(input.validationMessage).toBe("Le format n'est pas bon."));
  });
});
