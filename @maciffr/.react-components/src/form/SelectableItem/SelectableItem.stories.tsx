import { StoryObj, StoryFn, Meta } from '@storybook/react';
import SelectableItem, { SelectableItemProperties } from './SelectableItem';
import WrappedContainer from '../../Containers/WrappedContainer/WrappedContainer';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Macif/Components/Form/SelectableItem',
  component: SelectableItem,
  tags: ['autodocs'],
} as Meta<typeof SelectableItem>;

const Template: StoryFn<typeof SelectableItem> = (args: SelectableItemProperties) => (
  <SelectableItem {...args}>mon item</SelectableItem>
);

export const Basic: StoryObj<SelectableItemProperties> = {
  render: Template,

  args: {
    id: 'selectable-item',
    value: 'value',
    group: 'groupe-basic',
  },
};

export const Checked: StoryObj<SelectableItemProperties> = {
  render: Template,

  args: {
    id: 'selectable-item',
    value: 'value',
    checked: true,
    group: 'groupe-selected',
  },
};

const TemplateGroup: StoryFn<typeof SelectableItem> = () => (
  <WrappedContainer onChange={action('onChange')}>
    <SelectableItem id="1" group="monGroup" value="1" defaultChecked={true}>
      1
    </SelectableItem>
    <SelectableItem id="2" group="monGroup" value="2">
      2
    </SelectableItem>
    <SelectableItem id="3" group="monGroup" value="3">
      3
    </SelectableItem>
    <SelectableItem id="4" group="monGroup" value="4">
      4
    </SelectableItem>
    <SelectableItem id="5" group="monGroup" value="5">
      5
    </SelectableItem>
  </WrappedContainer>
);

export const Group = {
  render: TemplateGroup,
};
