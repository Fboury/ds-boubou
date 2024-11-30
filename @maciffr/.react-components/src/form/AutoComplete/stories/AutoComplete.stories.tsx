import {Meta, StoryObj} from '@storybook/react';
import AutoComplete from '../';
import {MOCK_SUGGESTION_LIST, MOCK_SUGGESTION_LIST_HTML} from '../mocks/SuggestionList';

const meta: Meta<typeof AutoComplete> = {
  title: 'Macif/Components/Form/AutoComplete',
  tags: ['autodocs'],
  component: AutoComplete,
};

export default meta;
type Story = StoryObj<typeof AutoComplete>;

export const Base: Story = {
  args: {
    id: 'test',
    options: MOCK_SUGGESTION_LIST,
    placeholder: 'Ex: Test',
    onSearch: (_) => {
    },
  },
  render: (args) => <AutoComplete {...args} />,
};

export const WithHtml: Story = {
  args: {
    id: 'test',
    options: MOCK_SUGGESTION_LIST_HTML,
    placeholder: 'Ex: Test',
    onSearch: (_) => {
    },
  },
  render: (args) => <AutoComplete {...args} />,
};

export const WithHeader: Story = {
  args: {
    id: 'test',
    options: MOCK_SUGGESTION_LIST,
    placeholder: 'Ex: Test',
    description: 'Ceci est un bandeau avec une description.',
    onSearch: (_) => {
    },
  },
  render: (args) => <AutoComplete {...args} />
}

export const WithHeaderHtml: Story = {
  args: {
    id: 'test',
    options: MOCK_SUGGESTION_LIST,
    placeholder: 'Ex: Test',
    description: (
        <>
          Ceci est un bandeau avec une description <strong>en HTML</strong>
        </>
    ),
    onSearch: (_) => {
    },
  },
  render: (args) => <AutoComplete {...args} />
}

export const Erreur: Story = {
  args: {
    id: 'test',
    erreur: 'Veuillez préciser votre activité',
    placeholder: 'Ex: Test',
    options: [],
    onSearch: (_) => {
    },
  },
  render: (args) => <AutoComplete {...args} />,
};
