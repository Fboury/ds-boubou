import { StoryFn, Meta } from '@storybook/react';
import Loader, { LoaderProps } from '../Loader/Loader';

export default {
  title: 'Macif/Components/Loader',
  component: Loader,
  tags: ['autodocs'],
} as Meta<typeof Loader>;

const Template: StoryFn<typeof Loader> = (args: LoaderProps) => <Loader {...args} />;
Template.parameters = {
  docs: {
    story: {
      iframeHeight: 500,
    },
  },
};

export const Basic = {
  args: {
    show: true,
    'data-testid': 'test',
  },
};
