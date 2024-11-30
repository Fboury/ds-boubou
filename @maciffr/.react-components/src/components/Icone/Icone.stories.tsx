import Icone, { IconeProperties } from './Icone';
import { StoryFn, Meta } from '@storybook/react';

export default {
  title: 'Macif/Components/Icone',
  component: Icone,
  tags: ['autodocs'],
  argTypes: {
    'data-testid': {
      table: {
        disable: true,
      },
    },
  },
} as Meta<typeof Icone>;

export const Basic = {
  args: {
    'data-testid': 'test',
    value: 'sinistre-inondation',
  },
};
