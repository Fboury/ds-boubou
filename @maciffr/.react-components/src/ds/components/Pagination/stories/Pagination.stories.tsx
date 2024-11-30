import { useState } from "react";
import { StoryFn, StoryObj, Meta } from "@storybook/react";
import Pagination, { PaginationProps } from "../index";

const meta: Meta<typeof Pagination> = {
  title: "DS/Components/Pagination",
  component: Pagination,
  tags: ["autodocs"],
};

export default meta;

const Template: StoryFn<typeof Pagination> = (args: PaginationProps) => {
  const [pageNumber, setPageNumber] = useState(args.pageActive || 1);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Pagination {...args} pageActive={pageNumber} handlePageChange={(n) => setPageNumber(n)} />
    </div>
  );
};

export const ListeSansExtremites: StoryObj<typeof Pagination> = {
  render: Template,
  args: {
    nombreBoutonsAffiches: 1,
    nombrePages: 10,
    ariaLabel: "",
    "data-testid": "test",
  },
};

export const ListeAvecExtremites: StoryObj<typeof Pagination> = {
  render: Template,
  args: {
    nombreBoutonsAffiches: 3,
    nombrePages: 10,
    afficherExtremites: true,
    ariaLabel: "",
    "data-testid": "test",
  },
};

export const ListeAvecPlusieursPagesDeChaqueCote: StoryObj<typeof Pagination> = {
  render: Template,
  args: {
    nombreBoutonsAffiches: 5,
    nombrePages: 20,
    afficherExtremites: true,
    ariaLabel: "",
    "data-testid": "test",
  },
};

export const ListeCourte: StoryObj<typeof Pagination> = {
  render: Template,
  args: {
    nombreBoutonsAffiches: 2,
    nombrePages: 1,
    ariaLabel: "",
    "data-testid": "test",
  },
};
