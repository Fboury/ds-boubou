import StepBar from './StepBar';
import {Meta, StoryObj} from '@storybook/react';
import {userEvent, within} from '@storybook/testing-library';

export default {
  title: 'Macif/Components/Tunnel/Header/StepBar',
  component: StepBar,
  tags: ['autodocs'],
} as Meta<typeof StepBar>;

export const Desktop: StoryObj<typeof StepBar> = {
  args: {
    activeSection: 'Montage',
    sections: ['Initialisation', 'Montage', 'Mise à jour', 'Démontage'],
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const testElement = canvas.getByTestId<HTMLInputElement>('test');

    await userEvent.type(testElement, '');

    testElement.reportValidity();
  },
};

export const DesktopReverse: StoryObj<typeof StepBar> = {
  args: {
    activeSection: 'Mise à jour',
    sections: ['Initialisation', 'Montage', 'Mise à jour', 'Démontage'],
    className: 'mcf-stepbar--md--reverse',
  },
};

export const Mobile: StoryObj<typeof StepBar> = {
  args: {
    activeSection: 'Mise à jour',
    sections: ['Initialisation', 'Montage', 'Mise à jour', 'Démontage'],
    className: 'mcf-stepbar--md--reverse',
  },

  parameters: {
    viewport: {
      defaultViewport: 'iphone6',
    },
  },
};
