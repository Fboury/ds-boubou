import ViewLoader, {ViewLoaderProps} from "./ViewLoader";
import {Meta, StoryFn} from '@storybook/react';

export default {
  title: 'Macif/Components/ViewLoader',
  component: ViewLoader,
  tags: ['autodocs'],
  argTypes: {
    'data-testid': {
      table: {
        disable: true,
      },
    },
  },
} as Meta<typeof ViewLoader>;

const TheView = () => {
  return (
    <>
      <h1>Contenu à afficher</h1>
      <p className="mcf-text--big-1 mcf-py--4">
        Le container est redimensionné progressivement en fonction de la taille réel du contenu.
      </p>
      <p className="mcf-text--big-1 mcf-py--4">
        Le container est redimensionné progressivement en fonction de la taille réel du contenu.
      </p>
      <p className="mcf-text--big-1 mcf-py--4">
        Le container est redimensionné progressivement en fonction de la taille réel du contenu.
      </p>
      <p className="mcf-text--big-1 mcf-py--4">
        Le container est redimensionné progressivement en fonction de la taille réel du contenu.
      </p>
    </>
  );
};

const Template: StoryFn<typeof ViewLoader> = ({ ...args }: ViewLoaderProps) => (
  <ViewLoader {...args}>
    <TheView />
  </ViewLoader>
);

export const Loading = {
  render: Template,

  args: {
    id: 'test',
    loading: true,
    'data-testid': 'test',
  },
};

export const Content = {
  render: Template,

  args: {
    id: 'test',
    loading: false,
    'data-testid': 'test',
  },
};

function LoaderTemplate() {
  return (
    <div className="mcf-d--flex mcf-flex--column">
      <div className="mcf-skeleton mcf-rounded--circle" style={{ width: 40, height: 40 }}></div>
      <div className="mcf-skeleton mcf-rounded" style={{ height: 40 }} />
      <div className="mcf-skeleton mcf-w--50 mcf-rounded" style={{ height: 40 }} />
      <div className="mcf-d--flex">
        <div className="mcf-skeleton mcf-rounded--circle" style={{ width: 40, height: 40 }}></div>
        <div className="mcf-skeleton mcf-flex--grow-1 mcf-rounded"></div>
      </div>
    </div>
  );
}

export const CustomTemplate = {
  render: Template,

  args: {
    id: 'test',
    loading: true,
    'data-testid': 'test',
    template: <LoaderTemplate />,
  },
};
