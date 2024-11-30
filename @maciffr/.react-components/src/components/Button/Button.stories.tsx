import {FormEvent} from 'react';
import Button, {ButtonProperties} from './Button';
import {Meta, StoryFn, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions';

export default {
  title: 'Macif/Components/Button',
  component: Button,
  argTypes: {
    'data-testid': {
      table: {
        disable: true,
      },
    },
  },
  parameters: { actions: { argTypesRegex: 'onClick' } },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args: ButtonProperties) => (
  <Button {...args}>{args.children}</Button>
);
const actionFormSubmit = action('Soumission du formulaire');
const onSubmit = (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  const target = event.target as unknown as HTMLInputElement;

  actionFormSubmit(target.value);
};

const TemplateForm: StoryFn<typeof Button> = (args: ButtonProperties) => (
  <form data-testid="form-test" className="was-validated" onSubmit={(e) => onSubmit(e)}>
    <Button {...args}>{args.children}</Button>
  </form>
);

export const Basic: StoryObj<typeof Button> = {
  render: Template,

  args: {
    'data-testid': 'test',
    children: 'Test',
  },
};

export const Icon: StoryObj<typeof Button> = {
  render: Template,

  args: {
    'data-testid': 'test',
    children: <i className="icon icon-md-quizz-reglementation"></i>,
  },
};

export const Disabled: StoryObj<typeof Button> = {
  render: Template,

  args: {
    'data-testid': 'test',
    children: 'Test',
    disabled: true,
  },
};

export const Submit: StoryObj<typeof Button> = {
  render: TemplateForm,

  args: {
    'data-testid': 'test',
    children: 'Enregistrer',
    type: 'submit',
  },
};
