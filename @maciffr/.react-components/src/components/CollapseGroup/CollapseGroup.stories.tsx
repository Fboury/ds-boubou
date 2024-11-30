import { StoryObj, StoryFn, Meta } from '@storybook/react';
import CollapseGroupItem, {
  CollapseGroupItemProperties,
} from './CollapseGroupItem/CollapseGroupItem';
import CollapseGroup from './CollapseGroup';

export default {
  title: 'Macif/Components/CollapseGroup',
  component: CollapseGroupItem,
  tags: ['autodocs'],
  parameters: {
    backgrounds: { default: 'white', values: [{ name: 'white', value: '#FFF' }] },
  },
} as Meta<typeof CollapseGroupItem>;

const Template: StoryFn<typeof CollapseGroupItem> = () => {
  return (
    <CollapseGroup id="collapse1">
      <CollapseGroupItem id="collapseTest">
        <CollapseGroupItem.Title as="h4">
          <span
            aria-hidden="true"
            className={`icon icon-informatique mcf-text--vert-menthe mcf-mr-md--2 mcf-mr--3`}
          ></span>
          Test1
        </CollapseGroupItem.Title>
        <CollapseGroupItem.Content>Collapse Test 1</CollapseGroupItem.Content>
      </CollapseGroupItem>
      <CollapseGroupItem id="collapseTest2">
        <CollapseGroupItem.Title as="h4">
          <span
            aria-hidden="true"
            className={`icon icon-justice mcf-text--vert-menthe mcf-mr-md--2 mcf-mr--3`}
          ></span>
          Test2
        </CollapseGroupItem.Title>
        <CollapseGroupItem.Content>
          Collapse Test 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia
          consequat risus, eget consequat purus blandit non. Fusce sit amet bibendum turpis. Quisque
          volutpat ipsum nec ex venenatis, id cursus ipsum viverra. In in tempor nisi. In
          consectetur sem ut ligula eleifend cursus. Curabitur ligula nisl, tincidunt vitae aliquam
          nec, pretium a ante. Nam vel ligula id erat sollicitudin finibus. Suspendisse dui urna,
          vestibulum nec elit a, accumsan viverra ipsum. Mauris non quam massa. Sed efficitur at
          urna eu vestibulum. Maecenas malesuada dictum augue quis tincidunt. Morbi sit amet semper
          odio, sit amet ultrices turpis. Praesent lacinia tincidunt tristique. Vivamus id auctor
          felis, nec pharetra ex. Duis iaculis urna eros, in convallis tellus tincidunt sit amet.
          Aliquam et arcu id quam tempor euismod sit amet nec lorem. Nullam suscipit nunc at diam
          luctus, et tristique justo imperdiet. Quisque at risus a lacus efficitur vehicula. Etiam
          orci erat, imperdiet a fringilla sit amet, tristique et elit. Aenean accumsan, orci in
          dignissim semper, tortor nisi porttitor sapien, at congue enim mi commodo ex. Suspendisse
          tristique magna eget sapien tristique elementum. Phasellus id tincidunt quam. Curabitur
          lobortis augue tellus. Maecenas malesuada dictum augue quis tincidunt. Morbi sit amet
          semper odio, sit amet ultrices turpis. Praesent lacinia tincidunt tristique. Vivamus id
          auctor felis, nec pharetra ex. Duis iaculis urna eros, in convallis tellus tincidunt sit
          amet. Aliquam et arcu id quam tempor euismod sit amet nec lorem. Nullam suscipit nunc at
          diam luctus, et tristique justo imperdiet. Quisque at risus a lacus efficitur vehicula.
          Etiam orci erat, imperdiet a fringilla sit amet, tristique et elit. Aenean accumsan, orci
          in dignissim semper, tortor nisi porttitor sapien, at congue enim mi commodo ex.
          Suspendisse tristique magna eget sapien tristique elementum. Phasellus id tincidunt quam.
          Curabitur lobortis augue tellus. Maecenas malesuada dictum augue quis tincidunt. Morbi sit
          amet semper odio, sit amet ultrices turpis. Praesent lacinia tincidunt tristique. Vivamus
          id auctor felis, nec pharetra ex. Duis iaculis urna eros, in convallis tellus tincidunt
          sit amet. Aliquam et arcu id quam tempor euismod sit amet nec lorem. Nullam suscipit nunc
          at diam luctus, et tristique justo imperdiet. Quisque at risus a lacus efficitur vehicula.
          Etiam orci erat, imperdiet a fringilla sit amet, tristique et elit. Aenean accumsan, orci
          in dignissim semper, tortor nisi porttitor sapien, at congue enim mi commodo ex.
          Suspendisse tristique magna eget sapien tristique elementum. Phasellus id tincidunt quam.
          Curabitur lobortis augue tellus.
        </CollapseGroupItem.Content>
      </CollapseGroupItem>
      <CollapseGroupItem id="collapseTest3">
        <CollapseGroupItem.Title as="h4">
          <span
            aria-hidden="true"
            className={`icon icon-justice mcf-text--vert-menthe mcf-mr-md--2 mcf-mr--3`}
          ></span>
          Test3
        </CollapseGroupItem.Title>
        <CollapseGroupItem.Content>
          Collapse Test 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia
          consequat risus, eget consequat purus blandit non. Fusce sit amet bibendum turpis. Quisque
          volutpat ipsum nec ex venenatis, id cursus ipsum viverra. In in tempor nisi. In
          consectetur sem ut ligula eleifend cursus. Curabitur ligula nisl, tincidunt vitae aliquam
          nec, pretium a ante. Nam vel ligula id erat sollicitudin finibus. Suspendisse dui urna,
          vestibulum nec elit a, accumsan viverra ipsum. Mauris non quam massa. Sed efficitur at
          urna eu vestibulum. Maecenas malesuada dictum augue quis tincidunt. Morbi sit amet semper
          odio, sit amet ultrices turpis. Praesent lacinia tincidunt tristique. Vivamus id auctor
          felis, nec pharetra ex. Duis iaculis urna eros, in convallis tellus tincidunt sit amet.
          Aliquam et arcu id quam tempor euismod sit amet nec lorem. Nullam suscipit nunc at diam
          luctus, et tristique justo imperdiet. Quisque at risus a lacus efficitur vehicula. Etiam
          orci erat, imperdiet a fringilla sit amet, tristique et elit. Aenean accumsan, orci in
          dignissim semper, tortor nisi porttitor sapien, at congue enim mi commodo ex. Suspendisse
          tristique magna eget sapien tristique elementum. Phasellus id tincidunt quam. Curabitur
          lobortis augue tellus.
        </CollapseGroupItem.Content>
      </CollapseGroupItem>
    </CollapseGroup>
  );
};

export const Basic: StoryObj<CollapseGroupItemProperties> = {
  render: Template,
};
