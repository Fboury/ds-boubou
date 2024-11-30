import { useState } from 'react';
import DatePicker, { DatePickerProps } from './index';
import { StoryFn, Meta } from '@storybook/react';

export default {
  title: 'Macif/Components/Form/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  argTypes: {
    'data-testid': {
      table: {
        disable: true,
      },
    },
  },
} as Meta<typeof DatePicker>;

const Template: StoryFn<typeof DatePicker> = ({ ...args }: DatePickerProps) => {
  const [selectedDate] = useState<Date>();

  return (
    <div>
      <div className="mcf-bg--vert-macif">Bloc du haut</div>
      <div style={{ width: 200, marginBottom: "300px" }}>
        <p>
          <span id="date">
            Veuillez indiquer une date au&nbsp;format&nbsp;
            <span id="jj">JJ</span>/<span id="mm">MM</span>/<span id="aaaa">AAAA</span>
          </span>
        </p>
        <DatePicker
          value={selectedDate}
          dayInputLabelledBy="jj"
          monthInputLabelledBy="mm"
          yearInputLabelledBy="aaaa"
          className="mcf-border"
          {...args}
        />
      </div>
      <div className="mcf-bg--vert-macif mcf-p--3">Bloc du bas</div>
    </div>
  );
};

export const Basic = {
  render: Template,

  args: {
    'data-testid': 'test',
  },
};

export const AvecMin = {
  render: Template,

  args: {
    'data-testid': 'test',
    min: new Date('2023-01-30'),
  },
};

export const AvecMax = {
  render: Template,

  args: {
    'data-testid': 'test',
    max: new Date('2023-01-30'),
  },
};

export const AvecMinMax = {
  render: Template,

  args: {
    'data-testid': 'test',
    max: new Date('2024-01-20'),
    min: new Date('2023-01-30'),
  },
};

export const AvecValeur = {
  render: Template,

  args: {
    'data-testid': 'test',
    value: new Date('2022-07-07'),
  },
};

export const MinMaxMemeAnnee = {
  render: Template,

  args: {
    'data-testid': 'test',
    max: new Date('2022-11-30'),
    min: new Date('2022-09-10'),
  },
};

export const MinMaxMemeMois = {
  render: Template,

  args: {
    'data-testid': 'test',
    max: new Date('2022-11-30'),
    min: new Date('2022-11-10'),
  },
};

export const Disabled = {
  render: Template,

  args: {
    'data-testid': 'test',
    value: new Date('2022-07-07'),
    disabled: true,
  },
};
