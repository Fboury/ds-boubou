import { Meta, StoryFn, StoryObj } from "@storybook/react";
import Description from "../../../components/Description";
import Legend from "../../../components/Legend";
import CheckboxFieldset from "../CheckboxFieldset";
import CheckboxGroup, { CheckboxGroupProps } from "../CheckboxGroup";
import Checkbox from "../index";
import { CheckboxRender, CheckboxSize } from "../CheckboxView";
import { useState } from "react";
import { within, userEvent } from "@storybook/testing-library";
import Button from "../../../components/Button";

const meta: Meta<typeof CheckboxGroup> = {
  title: "DS/Components/Form/Checkbox",
  component: CheckboxGroup,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof CheckboxGroup>;

const Template: StoryFn<typeof CheckboxGroup> = ({ children, ...props }: CheckboxGroupProps) => (
  <CheckboxFieldset>
    <Legend>
      Label
      <Description id="cbx-description">Description</Description>
    </Legend>
    <CheckboxGroup {...props}>{children}</CheckboxGroup>
  </CheckboxFieldset>
);

const TemplateForm: StoryFn<typeof CheckboxGroup> = ({ children, ...props }: CheckboxGroupProps) => {
  return (
    <form>
      <CheckboxFieldset>
        <Legend>Label</Legend>
        <CheckboxGroup {...props}>{children}</CheckboxGroup>
      </CheckboxFieldset>
      <Button id="test">Valider</Button>
    </form>
  );
};

export const Basic = {
  name: "Basique",
  render: Template,
  args: {
    defaultValue: ["checkbox-4"],
    id: "cbx-group",
    children: [
      <Checkbox key={1} id="checkbox-1" aria-describedby="cbx-description">
        option 1
      </Checkbox>,
      <Checkbox key={2} id="checkbox-2" aria-describedby="cbx-description">
        option 2
      </Checkbox>,
      <Checkbox key={3} id="checkbox-3" aria-describedby="cbx-description" disabled>
        option 3 (disabled)
      </Checkbox>,
      <Checkbox key={4} id="checkbox-4" aria-describedby="cbx-description" disabled>
        option 4 (disabled)
      </Checkbox>,
    ],
  },
} satisfies Story;

export const BasicFitContent = {
  name: "Basique Fit Content",
  render: Template,
  args: {
    defaultValue: ["checkbox-8"],
    id: "cbx-group-fit",
    children: [
      <Checkbox key={5} size={CheckboxSize.FitContent} id="checkbox-5" aria-describedby="cbx-description">
        option 1
      </Checkbox>,
      <Checkbox key={6} size={CheckboxSize.FitContent} id="checkbox-6" aria-describedby="cbx-description">
        option 2
      </Checkbox>,
      <Checkbox key={7} size={CheckboxSize.FitContent} id="checkbox-7" aria-describedby="cbx-description" disabled>
        option 3 (disabled)
      </Checkbox>,
      <Checkbox key={8} size={CheckboxSize.FitContent} id="checkbox-8" aria-describedby="cbx-description" disabled>
        option 4 (disabled)
      </Checkbox>,
    ],
  },
} satisfies Story;

export const Tile = {
  name: "Tile Full width",
  render: Template,
  args: {
    defaultValue: ["checkbox-12"],
    id: "cbx-group-tile",
    children: [
      <Checkbox
        key={9}
        render={CheckboxRender.Tile}
        size={CheckboxSize.FullWidth}
        id="checkbox-9"
        aria-describedby="cbx-description"
      >
        option 1
      </Checkbox>,
      <Checkbox
        key={10}
        render={CheckboxRender.Tile}
        size={CheckboxSize.FullWidth}
        id="checkbox-10"
        aria-describedby="cbx-description"
      >
        option 2
      </Checkbox>,
      <Checkbox
        key={11}
        render={CheckboxRender.Tile}
        size={CheckboxSize.FullWidth}
        id="checkbox-11"
        aria-describedby="cbx-description"
        disabled
      >
        option 3 (disabled)
      </Checkbox>,
      <Checkbox
        key={12}
        render={CheckboxRender.Tile}
        size={CheckboxSize.FullWidth}
        id="checkbox-12"
        aria-describedby="cbx-description"
        disabled
      >
        option 4 (disabled)
      </Checkbox>,
    ],
  },
} satisfies Story;

export const TileFitContent = {
  name: "Tile Fit Content",
  render: Template,
  args: {
    defaultValue: ["checkbox-16"],
    id: "cbx-group-tile-fit",
    children: [
      <Checkbox
        key={13}
        render={CheckboxRender.Tile}
        size={CheckboxSize.FitContent}
        id="checkbox-13"
        aria-describedby="cbx-description"
      >
        option 1
      </Checkbox>,
      <Checkbox
        key={14}
        render={CheckboxRender.Tile}
        size={CheckboxSize.FitContent}
        id="checkbox-14"
        aria-describedby="cbx-description"
      >
        option 2
      </Checkbox>,
      <Checkbox
        key={15}
        render={CheckboxRender.Tile}
        size={CheckboxSize.FitContent}
        id="checkbox-15"
        aria-describedby="cbx-description"
        disabled
      >
        option 3 (disabled)
      </Checkbox>,
      <Checkbox
        key={16}
        render={CheckboxRender.Tile}
        size={CheckboxSize.FitContent}
        id="checkbox-16"
        aria-describedby="cbx-description"
        disabled
      >
        option 4 (disabled)
      </Checkbox>,
    ],
  },
} satisfies Story;

export const TileErrorRequired = {
  name: "Tile Required",
  render: TemplateForm,
  args: {
    id: "cbx-group-tile-required",
    children: [
      <Checkbox key={16} required render={CheckboxRender.Tile} size={CheckboxSize.FitContent} id="checkbox-16">
        option 1 (required)
      </Checkbox>,
      <Checkbox key={17} render={CheckboxRender.Tile} size={CheckboxSize.FitContent} id="checkbox-17">
        option 2
      </Checkbox>,
    ],
  },
} satisfies Story;
