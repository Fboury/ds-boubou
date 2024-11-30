import { StoryFn, Meta, StoryObj } from "@storybook/react";
import ShowMore, { ShowMoreProps } from "../index";
import { TextSize } from "../../../enums/TextSize";

const meta = {
  title: "DS/Components/ShowMore",
  component: ShowMore,
  tags: ["autodocs"],
} as Meta<typeof ShowMore>;
export default meta;
type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof ShowMore> = ({ children, ...args }: ShowMoreProps) => (
  <ShowMore {...args}>{children}</ShowMore>
);
export const Basique = {
  render: Template,
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac justo nibh. Etiam aliquam imperdiet mollis. Praesent blandit finibus magna nec pulvinar. Vestibulum eleifend sapien eros, eu consectetur ipsum interdum sed. Nulla facilisi. Aenean rutrum maximus lorem tincidunt scelerisque. Vivamus sodales lorem a mauris sodales cursus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer posuere dolor urna, sed pulvinar sem volutpat et. Sed posuere maximus velit sit amet vehicula. Duis viverra diam mollis molestie placerat. Praesent ac vehicula orci.",
  },
} satisfies Story;

export const OuvertParDefaut = {
  render: Template,
  args: {
    openDefault: true,
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac justo nibh. Etiam aliquam imperdiet mollis. Praesent blandit finibus magna nec pulvinar. Vestibulum eleifend sapien eros, eu consectetur ipsum interdum sed. Nulla facilisi. Aenean rutrum maximus lorem tincidunt scelerisque. Vivamus sodales lorem a mauris sodales cursus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer posuere dolor urna, sed pulvinar sem volutpat et. Sed posuere maximus velit sit amet vehicula. Duis viverra diam mollis molestie placerat. Praesent ac vehicula orci.",
  },
} satisfies Story;

export const TexteBouton = {
  render: Template,
  args: {
    buttonText: (open) => (open ? <span>Fermer</span> : <span>Ouvrir</span>),
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac justo nibh. Etiam aliquam imperdiet mollis. Praesent blandit finibus magna nec pulvinar. Vestibulum eleifend sapien eros, eu consectetur ipsum interdum sed. Nulla facilisi. Aenean rutrum maximus lorem tincidunt scelerisque. Vivamus sodales lorem a mauris sodales cursus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer posuere dolor urna, sed pulvinar sem volutpat et. Sed posuere maximus velit sit amet vehicula. Duis viverra diam mollis molestie placerat. Praesent ac vehicula orci.",
  },
} satisfies Story;

export const TailleSmall = {
  render: Template,
  args: {
    size: TextSize.S,
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac justo nibh. Etiam aliquam imperdiet mollis. Praesent blandit finibus magna nec pulvinar. Vestibulum eleifend sapien eros, eu consectetur ipsum interdum sed. Nulla facilisi. Aenean rutrum maximus lorem tincidunt scelerisque. Vivamus sodales lorem a mauris sodales cursus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer posuere dolor urna, sed pulvinar sem volutpat et. Sed posuere maximus velit sit amet vehicula. Duis viverra diam mollis molestie placerat. Praesent ac vehicula orci.",
  },
} satisfies Story;

export const TailleMedium = {
  render: Template,
  args: {
    size: TextSize.M,
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac justo nibh. Etiam aliquam imperdiet mollis. Praesent blandit finibus magna nec pulvinar. Vestibulum eleifend sapien eros, eu consectetur ipsum interdum sed. Nulla facilisi. Aenean rutrum maximus lorem tincidunt scelerisque. Vivamus sodales lorem a mauris sodales cursus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer posuere dolor urna, sed pulvinar sem volutpat et. Sed posuere maximus velit sit amet vehicula. Duis viverra diam mollis molestie placerat. Praesent ac vehicula orci.",
  },
} satisfies Story;

export const TailleLarge = {
  render: Template,
  args: {
    size: TextSize.L,
    buttonText: (open: boolean) => (open ? "Afficher moins" : "Afficher plus"),
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac justo nibh. Etiam aliquam imperdiet mollis. Praesent blandit finibus magna nec pulvinar. Vestibulum eleifend sapien eros, eu consectetur ipsum interdum sed. Nulla facilisi. Aenean rutrum maximus lorem tincidunt scelerisque. Vivamus sodales lorem a mauris sodales cursus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer posuere dolor urna, sed pulvinar sem volutpat et. Sed posuere maximus velit sit amet vehicula. Duis viverra diam mollis molestie placerat. Praesent ac vehicula orci.",
  },
} satisfies Story;

export const TailleXL = {
  render: Template,
  args: {
    size: TextSize.XL,
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac justo nibh. Etiam aliquam imperdiet mollis. Praesent blandit finibus magna nec pulvinar. Vestibulum eleifend sapien eros, eu consectetur ipsum interdum sed. Nulla facilisi. Aenean rutrum maximus lorem tincidunt scelerisque. Vivamus sodales lorem a mauris sodales cursus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer posuere dolor urna, sed pulvinar sem volutpat et. Sed posuere maximus velit sit amet vehicula. Duis viverra diam mollis molestie placerat. Praesent ac vehicula orci.",
  },
} satisfies Story;
