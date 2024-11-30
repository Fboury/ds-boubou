import React from "react";
import "@testing-library/jest-dom";
import { composeStories } from "@storybook/react";
import { render, screen, act } from "@testing-library/react";
import * as Stories from "../stories/Pagination.stories";
import Pagination from "..";

const mockOnChange = jest.fn();

const { ListeCourte, ListeAvecExtremites, ListeAvecPlusieursPagesDeChaqueCote, ListeSansExtremites } =
  composeStories(Stories);

describe("Composants - Pagination", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("Affichage du composant", () => {
    it("Doit avoir la Pagination affichée - ListeCourte", () => {
      render(<ListeCourte />);

      const pagination = screen.getByTestId("test");

      expect(pagination).toBeVisible();
    });

    it("Doit avoir la Pagination affichée - ListeAvecExtremites", () => {
      render(<ListeAvecExtremites />);

      const pagination = screen.getByTestId("test");

      expect(pagination).toBeVisible();
    });

    it("Doit avoir la Pagination affichée - ListeAvecPlusieursPagesdeChaqueCote", () => {
      render(<ListeAvecPlusieursPagesDeChaqueCote />);

      const pagination = screen.getByTestId("test");

      expect(pagination).toBeVisible();
    });

    it("Doit avoir la Pagination affichée -  ListeSansExtremites", () => {
      render(<ListeSansExtremites />);

      const pagination = screen.getByTestId("test");

      expect(pagination).toBeVisible();
    });
  });

  describe("Flèches d'incrément", () => {
    it("Ne doit pas avoir de flèches aux extrémités - ListeCourte", () => {
      render(<ListeCourte />);

      const pagination = screen.getByTestId("test");

      expect(pagination.querySelector(".mds-icon__chevron-left")).toBeNull();
      expect(pagination.querySelector(".mds-icon__chevron-right")).toBeNull();
    });

    it("Doit avoir la flèche de droite affichée mais pas la flèche de gauche", () => {
      render(<ListeAvecExtremites nombrePages={10} pageActive={1} />);

      const pagination = screen.getByTestId("test");

      expect(pagination.querySelector(".mds-icon__chevron-left")).toBeNull();
      expect(pagination.querySelector(".mds-icon__chevron-right")).toBeDefined();
    });

    it("Doit avoir les deux flèches affichées", () => {
      render(<ListeAvecExtremites nombrePages={10} pageActive={5} />);

      const pagination = screen.getByTestId("test");

      expect(pagination.querySelector(".mds-icon__chevron-left")).toBeDefined();
      expect(pagination.querySelector(".mds-icon__chevron-right")).toBeDefined();
    });

    it("Doit avoir la flèche de gauche affichée mais pas la flèche de droite", () => {
      render(<ListeAvecExtremites nombrePages={10} pageActive={10} />);

      const pagination = screen.getByTestId("test");

      expect(pagination.querySelector(".mds-icon__chevron-left")).toBeDefined();
      expect(pagination.querySelector(".mds-icon__chevron-right")).toBeNull();
    });
  });

  describe("Changement de page", () => {
    it("Appelle la fonction pour changer de page en cliquant sur les numéros", async () => {
      render(
        <Pagination
          pageActive={1}
          nombreBoutonsAffiches={5}
          nombrePages={10}
          handlePageChange={mockOnChange}
          afficherExtremites={false}
          ariaLabel={""}
        />
      );

      screen.getByText("2").click();

      expect(mockOnChange).toHaveBeenCalledWith(2);
    });

    it("Appelle la fonction pour changer de page en cliquant sur les flèches", async () => {
      render(
        <Pagination
          pageActive={5}
          nombreBoutonsAffiches={5}
          nombrePages={10}
          handlePageChange={mockOnChange}
          afficherExtremites={false}
          ariaLabel={""}
          data-testid="test"
        />
      );

      const pagination = screen.getByTestId("test");

      const leftButton: HTMLElement = pagination.querySelector("li:first-child button")!;
      leftButton.click();

      expect(mockOnChange).toHaveBeenCalledWith(4);

      const rightButton: HTMLElement = pagination.querySelector("li:last-child button")!;
      rightButton.click();

      expect(mockOnChange).toHaveBeenLastCalledWith(6);
    });
  });
});
