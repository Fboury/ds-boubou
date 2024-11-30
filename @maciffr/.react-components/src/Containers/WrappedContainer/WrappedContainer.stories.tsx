import { StoryObj, StoryFn, Meta } from '@storybook/react';
import WrappedContainer, {
  WrappedContainerOrientation,
  WrappedContainerProperties,
} from './WrappedContainer';

export default {
  title: 'Macif/Components/Containers/WrappedContainer',
  component: WrappedContainer,
  tags: ['autodocs'],
} as Meta<typeof WrappedContainer>;

const Template: StoryFn<typeof WrappedContainer> = (args) => (
  <WrappedContainer {...args}>
    <div
      style={{
        border: '2px solid #d19638',
        display: 'flex',
        fontWeight: 'bold',
        fontSize: '10em',
        alignItems: 'center',
        justifyContent: 'center',
        width: '350px',
        height: '250px',
        backgroundColor: '#f5b042',
      }}
    >
      1
    </div>
    <div
      style={{
        border: '1px solid #ad2f68',
        display: 'flex',
        fontWeight: 'bold',
        fontSize: '10em',
        alignItems: 'center',
        justifyContent: 'center',
        width: '350px',
        height: '250px',
        backgroundColor: '#f54295',
      }}
    >
      2
    </div>
    <div
      style={{
        border: '1px solid #3286ba',
        display: 'flex',
        fontWeight: 'bold',
        fontSize: '10em',
        alignItems: 'center',
        justifyContent: 'center',
        width: '350px',
        height: '250px',
        backgroundColor: '#42b0f5',
      }}
    >
      3
    </div>
    <div
      style={{
        border: '2px solid #d19638',
        display: 'flex',
        fontWeight: 'bold',
        fontSize: '10em',
        alignItems: 'center',
        justifyContent: 'center',
        width: '350px',
        height: '250px',
        backgroundColor: '#f5b042',
      }}
    >
      4
    </div>
    <div
      style={{
        border: '1px solid #ad2f68',
        display: 'flex',
        fontWeight: 'bold',
        fontSize: '10em',
        alignItems: 'center',
        justifyContent: 'center',
        width: '350px',
        height: '250px',
        backgroundColor: '#f54295',
      }}
    >
      5
    </div>
    <div
      style={{
        border: '1px solid #3286ba',
        display: 'flex',
        fontWeight: 'bold',
        fontSize: '10em',
        alignItems: 'center',
        justifyContent: 'center',
        width: '350px',
        height: '250px',
        backgroundColor: '#42b0f5',
      }}
    >
      6
    </div>
    <div
      style={{
        border: '2px solid #d19638',
        display: 'flex',
        fontWeight: 'bold',
        fontSize: '10em',
        alignItems: 'center',
        justifyContent: 'center',
        width: '350px',
        height: '250px',
        backgroundColor: '#f5b042',
      }}
    >
      7
    </div>
    <div
      style={{
        border: '1px solid #ad2f68',
        display: 'flex',
        fontWeight: 'bold',
        fontSize: '10em',
        alignItems: 'center',
        justifyContent: 'center',
        width: '350px',
        height: '250px',
        backgroundColor: '#f54295',
      }}
    >
      8
    </div>
    <div
      style={{
        border: '1px solid #3286ba',
        display: 'flex',
        fontWeight: 'bold',
        fontSize: '10em',
        alignItems: 'center',
        justifyContent: 'center',
        width: '350px',
        height: '250px',
        backgroundColor: '#42b0f5',
      }}
    >
      9
    </div>
    <div
      style={{
        border: '2px solid #d19638',
        display: 'flex',
        fontWeight: 'bold',
        fontSize: '10em',
        alignItems: 'center',
        justifyContent: 'center',
        width: '350px',
        height: '250px',
        backgroundColor: '#f5b042',
      }}
    >
      10
    </div>
    <div
      style={{
        border: '1px solid #ad2f68',
        display: 'flex',
        fontWeight: 'bold',
        fontSize: '10em',
        alignItems: 'center',
        justifyContent: 'center',
        width: '350px',
        height: '250px',
        backgroundColor: '#f54295',
      }}
    >
      11
    </div>
    <div
      style={{
        border: '1px solid #3286ba',
        display: 'flex',
        fontWeight: 'bold',
        fontSize: '10em',
        alignItems: 'center',
        justifyContent: 'center',
        width: '350px',
        height: '250px',
        backgroundColor: '#42b0f5',
      }}
    >
      12
    </div>
  </WrappedContainer>
);

export const Basic: StoryObj<WrappedContainerProperties> = {
  render: Template,
};

export const OrientationRow: StoryObj<WrappedContainerProperties> = {
  render: Template,
  name: 'Orientation - Column',

  args: {
    orientation: WrappedContainerOrientation.Column,
    style: { height: '750px' },
  },
};
