import { Meta, StoryObj } from "@storybook/react";
import Autocomplete from "../index";
import AutocompleteResultItem, { AutocompleteItem } from "../AutocompleteResultItem";
import React, { useState } from "react";
import AutocompleteResultInfo from "../AutocompleteResultInfo";
import AutocompletePolite from "../AutocompletePolite";
import { within } from "@storybook/testing-library";
import AutocompleteResultList from "../AutocompleteResultList";
import AutocompleteResultLoader from "../AutocompleteResultLoader";
import AutocompleteLoader from "../AutocompleteLoader";
import AutocompleteResultInfoContent from "../AutocompleteResultInfoContent";
import SearchIcon from "../../../components/Icon/SearchIcon";
import { IconDirection } from "../../../components/Icon";

const meta: Meta<typeof Autocomplete> = {
  title: "DS/Components/Form/Autocomplete",
  tags: ["autodocs"],
  component: Autocomplete,
};

export default meta;
type Story = StoryObj<typeof Autocomplete>;

export const Base: Story = {
  render: () => {
    const [visible, setVisible] = useState(false);
    const [selected, setSelected] = useState<AutocompleteItem>();
    const [search, setSearch] = useState<string>();

    const handleSearch = (value: string) => {
      setSearch(value);
      setVisible(true);
    };

    return (
      <Autocomplete
        search={search}
        onSearch={handleSearch}
        onToggle={setVisible}
        value={selected?.value}
        visible={visible}
        onSelect={setSelected}
        id="story"
        autoComplete="off"
        data-testid="test-input"
      >
        <AutocompleteResultList aria-label="Suggestions" id="story-results">
          <AutocompleteResultItem id="result-1" code="1" value="Texte résultat 1">
            <p>Texte résultat 1</p>
            <p>Description</p>
          </AutocompleteResultItem>
        </AutocompleteResultList>
      </Autocomplete>
    );
  },
};

export const WithResult: Story = {
  render: () => {
    const [visible, setVisible] = useState(false);
    const [selected, setSelected] = useState<AutocompleteItem>();
    const [search, setSearch] = useState<string>();

    const handleSearch = (value: string) => {
      setSearch(value);
      setVisible(true);
    };

    return (
      <Autocomplete
        search={search}
        onSearch={handleSearch}
        onToggle={setVisible}
        value={selected?.value}
        visible={visible}
        onSelect={setSelected}
        autoComplete="off"
        id="story"
        data-testid="test-input"
      >
        <AutocompleteResultList aria-label="Suggestions" id="story-results">
          <AutocompleteResultItem id="result-1" code="1" value="Texte résultat 1">
            <p>Texte résultat 1</p>
            <p>Description</p>
          </AutocompleteResultItem>
          <AutocompleteResultItem id="result-2" code="2" value="Texte résultat 2">
            <p>Texte résultat 2</p>
            <p>Description</p>
          </AutocompleteResultItem>
          <AutocompleteResultItem id="result-3" code="3" value="Texte résultat 3">
            <p>Texte résultat 3</p>
            <p>Description</p>
          </AutocompleteResultItem>
        </AutocompleteResultList>
      </Autocomplete>
    );
  },
};

export const WithLoader: Story = {
  render: () => {
    const [visible, setVisible] = useState(false);
    const [selected, setSelected] = useState<AutocompleteItem>();
    const [search, setSearch] = useState<string>();

    const handleSearch = (value: string) => {
      setSearch(value);
      setVisible(true);
    };

    return (
      <Autocomplete
        visible={visible}
        value={selected?.value}
        search={search}
        onSearch={handleSearch}
        onSelect={setSelected}
        onToggle={setVisible}
        id="story"
        data-testid="test-input"
      >
        <AutocompleteResultLoader>
          <AutocompleteLoader aria-hidden="true" />
          <p>Recherche en cours...</p>
        </AutocompleteResultLoader>
      </Autocomplete>
    );
  },
};

export const WithInfo: Story = {
  render: () => {
    const [visible, setVisible] = useState(false);
    const [selected, setSelected] = useState<AutocompleteItem>();
    const [search, setSearch] = useState<string>();

    const handleSearch = (value: string) => {
      setSearch(value);
      setVisible(true);
    };

    return (
      <Autocomplete
        search={search}
        onSearch={handleSearch}
        value={selected?.value}
        visible={visible}
        onToggle={setVisible}
        onSelect={setSelected}
        autoComplete="off"
        id="story"
        data-testid="test-input"
      >
        <AutocompleteResultInfo>
          <SearchIcon direction={IconDirection.Left} />
          <AutocompleteResultInfoContent>
            <p className="">3 résultats affichés sur 10.</p>
            <a className="mds-link" href="#">
              Voir tous les résultats
            </a>
          </AutocompleteResultInfoContent>
        </AutocompleteResultInfo>
        <AutocompleteResultList aria-label="Suggestions" id="story-results">
          <AutocompleteResultItem id="result-1" code="1" value="Texte résultat 1">
            <p>Texte résultat 1</p>
            <p>Description</p>
          </AutocompleteResultItem>
          <AutocompleteResultItem id="result-2" code="2" value="Texte résultat 2">
            <p>Texte résultat 2</p>
            <p>Description</p>
          </AutocompleteResultItem>
          <AutocompleteResultItem id="result-3" code="3" value="Texte résultat 3">
            <p>Texte résultat 3</p>
            <p>Description</p>
          </AutocompleteResultItem>
        </AutocompleteResultList>
      </Autocomplete>
    );
  },
};

export const WithPolite: Story = {
  render: () => {
    const [visible, setVisible] = useState(false);
    const [selected, setSelected] = useState<AutocompleteItem | undefined>();
    const [search, setSearch] = useState<string>();

    const handleSearch = (value: string) => {
      setSearch(value);
      setVisible(true);
    };

    return (
      <>
        <Autocomplete
          search={search}
          onSearch={handleSearch}
          value={selected?.value}
          visible={visible}
          onToggle={setVisible}
          onSelect={setSelected}
          id="story"
          autoComplete="off"
          data-testid="test-input"
        >
          <AutocompleteResultInfo>
            <SearchIcon direction={IconDirection.Left} />
            <AutocompleteResultInfoContent>
              <p className="">3 résultats affichés sur 10.</p>
              <a className="mds-link" href="#">
                Voir tous les résultats
              </a>
            </AutocompleteResultInfoContent>
          </AutocompleteResultInfo>
          <AutocompleteResultList aria-label="Suggestions" id="story-results">
            <AutocompleteResultItem id="result-1" code="1" value="Texte résultat 1">
              <p>Texte résultat 1</p>
              <p>Description</p>
            </AutocompleteResultItem>
            <AutocompleteResultItem id="result-2" code="2" value="Texte résultat 2">
              <p>Texte résultat 2</p>
              <p>Description</p>
            </AutocompleteResultItem>
            <AutocompleteResultItem id="result-3" code="3" value="Texte résultat 3">
              <p>Texte résultat 3</p>
              <p>Description</p>
            </AutocompleteResultItem>
          </AutocompleteResultList>
        </Autocomplete>
        <AutocompletePolite>
          <p>3 éléments affichés sur 10.</p>
        </AutocompletePolite>
      </>
    );
  },
};

export const WithValue: Story = {
  render: () => {
    const [visible, setVisible] = useState(false);
    const [selected, setSelected] = useState<AutocompleteItem | undefined>({
      code: "1",
      value: "Texte Valeur",
    });
    const [search, setSearch] = useState<string>();

    const handleSearch = (value: string) => {
      setSearch(value);
      setVisible(true);
    };

    return (
      <>
        <Autocomplete
          search={search}
          visible={visible}
          onToggle={setVisible}
          onSearch={handleSearch}
          value={selected?.value}
          autoComplete="off"
          onSelect={setSelected}
          id="story"
          data-testid="test-input"
        >
          <AutocompleteResultInfo>
            <SearchIcon direction={IconDirection.Left} />
            <AutocompleteResultInfoContent>
              <p className="">3 résultats affichés sur 10.</p>
              <a className="mds-link" href="#">
                Voir tous les résultats
              </a>
            </AutocompleteResultInfoContent>
          </AutocompleteResultInfo>
          <AutocompleteResultList aria-label="Suggestions" id="story-results">
            <AutocompleteResultItem id="result-1" code="1" value="Texte résultat 1">
              <p>Texte résultat 1</p>
              <p>Description</p>
            </AutocompleteResultItem>
            <AutocompleteResultItem id="result-2" code="2" value="Texte résultat 2">
              <p>Texte résultat 2</p>
              <p>Description</p>
            </AutocompleteResultItem>
            <AutocompleteResultItem id="result-3" code="3" value="Texte résultat 3">
              <p>Texte résultat 3</p>
              <p>Description</p>
            </AutocompleteResultItem>
          </AutocompleteResultList>
        </Autocomplete>
        <AutocompletePolite>
          <p>3 éléments affichés sur 10.</p>
        </AutocompletePolite>
      </>
    );
  },
};

export const Required: Story = {
  render: (args) => {
    const [visible, setVisible] = useState(false);
    const [selected, setSelected] = useState<AutocompleteItem>();
    const [search, setSearch] = useState<string>();

    const handleSearch = (value: string) => {
      setSearch(value);
      setVisible(true);
    };

    return (
      <Autocomplete
        search={search}
        visible={visible}
        onToggle={setVisible}
        onSearch={handleSearch}
        value={selected?.value}
        onSelect={setSelected}
        id="story"
        autoComplete="off"
        required
        data-testid="test-input"
      >
        <AutocompleteResultList aria-label="Suggestions" id="story-results">
          <AutocompleteResultItem id="result-1" code="1" value="Texte résultat 1">
            <p>Texte résultat 1</p>
            <p>Description</p>
          </AutocompleteResultItem>
          <AutocompleteResultItem id="result-2" code="2" value="Texte résultat 2">
            <p>Texte résultat 2</p>
            <p>Description</p>
          </AutocompleteResultItem>
          <AutocompleteResultItem id="result-3" code="3" value="Texte résultat 3">
            <p>Texte résultat 3</p>
            <p>Description</p>
          </AutocompleteResultItem>
        </AutocompleteResultList>
      </Autocomplete>
    );
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByTestId<HTMLInputElement>("test-input");
    input.reportValidity();
  },
};
