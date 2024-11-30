import InputGroup, {InputGroupProperties} from './InputGroup';
import {Meta, StoryFn, StoryObj} from '@storybook/react';
import InputNumber, {InputNumberProperties} from '../InputNumber/InputNumber';
import Prefix from './Prefix/Prefix';
import InputText from '../InputText';
import {userEvent, within} from '@storybook/testing-library';
import Suffix from './Suffix/Suffix';

export default {
  title: 'Macif/Components/Form/InputGroup',
  component: InputGroup,
  tags: ['autodocs'],
} as Meta<typeof InputGroup>;

const TemplateWithNumberPrefix: StoryFn<typeof InputGroup> = (args: InputGroupProperties) => (
  <InputGroup {...args}>
    <Prefix>$</Prefix>
    <InputNumber id="test" />
  </InputGroup>
);

export const PrefixWithInputNumber = {
  render: TemplateWithNumberPrefix,
};

const TemplateWithTextPrefix: StoryFn<typeof InputGroup> = (args: InputGroupProperties) => (
  <InputGroup {...args}>
    <Prefix>Prénom</Prefix>
    <InputText id="test" />
  </InputGroup>
);

export const PrefixWithInputText: StoryObj<typeof InputGroup> = {
  render: TemplateWithTextPrefix,
};

const TemplateWithNumberSuffix: StoryFn<typeof InputGroup> = (args: InputGroupProperties) => (
  <InputGroup {...args}>
    <InputNumber id="test" />
    <Suffix>€</Suffix>
  </InputGroup>
);

export const SuffixWithInputNumber: StoryObj<typeof InputGroup> = {
  render: TemplateWithNumberSuffix,
};

const TemplateWithNumberMaxValueSuffix: StoryFn<typeof InputNumber> = (
  args: InputNumberProperties
) => (
  <InputGroup>
    <InputNumber id="test" data-testid="input-test" {...args} />
    <Suffix>€</Suffix>
  </InputGroup>
);

export const SuffixWithInputNumberMaxValue: StoryObj<typeof InputNumber> = {
  render: TemplateWithNumberMaxValueSuffix,

  args: {
    max: 50,
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const testElement = canvas.getByTestId<HTMLInputElement>('input-test');

    userEvent.type(testElement, '51');

    testElement.reportValidity();
  },
};

const TemplateWithTextSuffix: StoryFn<typeof InputGroup> = (args: InputGroupProperties) => (
  <InputGroup {...args}>
    <InputText id="test" />
    <Suffix>@macif.fr</Suffix>
  </InputGroup>
);

export const SuffixWithInputText: StoryObj<typeof InputGroup> = {
  render: TemplateWithTextSuffix,
};
