import { FormEvent } from 'react';
import { StoryObj, StoryFn, Meta } from '@storybook/react';
import SelectableChoice, { SelectableChoiceProperties } from './SelectableChoice';
import SelectableItem from '../SelectableItem/SelectableItem';
import { action } from '@storybook/addon-actions';
import { userEvent, within } from '@storybook/testing-library';

export default {
  title: 'Macif/Components/Form/SelectableChoice',
  component: SelectableChoice,
  tags: ['autodocs'],
  subcomponents: { SelectableItem },
} as Meta<typeof SelectableChoice>;

const actionChoiceSelected = action('Choice Selected');
const onChoiceSelected = (event: FormEvent<HTMLFieldSetElement>) => {
  const target = event.target as unknown as HTMLInputElement;

  actionChoiceSelected(target.value);
};

const Template: StoryFn<typeof SelectableChoice> = ({ label }) => (
  <form data-testid="form-test" className="was-validated" onSubmit={(e) => e.preventDefault()}>
    <SelectableChoice data-testid="test" id="selectable" label={label} onChange={onChoiceSelected}>
      <SelectableItem
        id="choix1"
        value="1"
        group="mongroupe"
        required
        data-testid={'selectable-test'}
      >
        Choix 1
      </SelectableItem>
      <SelectableItem id="choix2" value="2" group="mongroupe">
        Choix 2
      </SelectableItem>
      <SelectableItem id="choix3" value="3" group="mongroupe">
        Choix 3
      </SelectableItem>
      <SelectableItem id="choix4" value="4" group="mongroupe">
        Choix 4
      </SelectableItem>
    </SelectableChoice>
  </form>
);

export const Base: StoryObj<SelectableChoiceProperties> = {
  render: Template,

  args: {
    label: 'Faite votre choix',
    onChange: action('Choix Selectionné'),
  },
};

export const Required: StoryObj<SelectableChoiceProperties> = {
  render: Template,

  args: {
    label: 'Le choix est obligatoire',
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const formulaire = canvas.getByTestId<HTMLFormElement>('form-test');

    const inputChecked: HTMLInputElement | null = document.querySelector('input');

    if (inputChecked) {
      userEvent.click(inputChecked);
    }

    formulaire.reset();

    formulaire.reportValidity();
  },
};
