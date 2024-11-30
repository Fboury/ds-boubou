import { StoryObj, StoryFn, Meta } from '@storybook/react';
import ErrorCard, { ContainerProps } from './index';
import AlertTitle from '../components/AlertTitle';
import AlertContent from '../components/AlertContent';
import Button from '../../../Button/Button';

export default {
  title: 'Macif/Components/Card/Alert/Error',
  component: ErrorCard,
  tags: ['autodocs'],
} as Meta<typeof ErrorCard>;

const TemplateBase: StoryFn<typeof ErrorCard> = () => (
  <ErrorCard>
    <AlertTitle>Une erreur technique est survenue</AlertTitle>
    <AlertContent>
      Suite à une erreur technique votre demande n'a pas pu aboutir. Veuillez essayer ultérieurement
      pour finaliser votre demande.
    </AlertContent>
  </ErrorCard>
);
export const Base: StoryObj<ContainerProps> = {
  render: TemplateBase,
};

const TemplateWithButton: StoryFn<typeof ErrorCard> = () => (
  <ErrorCard>
    <AlertTitle>Une erreur technique est survenue</AlertTitle>
    <AlertContent>
      Le service est indisponible pour le moment. Veuillez essayer ultérieurement pour renouveler
      votre demande.
    </AlertContent>
    <Button id="test">Action</Button>
  </ErrorCard>
);
export const WithButton: StoryObj<ContainerProps> = {
  render: TemplateWithButton,
};
const TemplateOnlyTitle: StoryFn<typeof ErrorCard> = () => (
  <ErrorCard>
    <AlertTitle>Une erreur technique est survenue</AlertTitle>
  </ErrorCard>
);
export const OnlyTitle: StoryObj<ContainerProps> = {
  render: TemplateOnlyTitle,
};
