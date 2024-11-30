import { StoryObj, StoryFn, Meta } from '@storybook/react';
import InfoCard, { ContainerProps } from './index';
import AlertTitle from '../components/AlertTitle';
import AlertContent from '../components/AlertContent';
import Button from '../../../Button/Button';

export default {
  title: 'Macif/Components/Card/Alert/Info',
  component: InfoCard,
  tags: ['autodocs'],
} as Meta<typeof InfoCard>;

const TemplateBase: StoryFn<typeof InfoCard> = () => (
  <InfoCard>
    <AlertTitle>Une erreur technique est survenue</AlertTitle>
    <AlertContent>
      Suite à une erreur technique votre demande n'a pas pu aboutir. Veuillez essayer ultérieurement
      pour finaliser votre demande.
    </AlertContent>
  </InfoCard>
);
export const Base: StoryObj<ContainerProps> = {
  render: TemplateBase,
};

const TemplateWithButton: StoryFn<typeof InfoCard> = () => (
  <InfoCard>
    <AlertTitle>Une erreur technique est survenue</AlertTitle>
    <AlertContent>
      Le service est indisponible pour le moment. Veuillez essayer ultérieurement pour renouveler
      votre demande.
    </AlertContent>
    <Button id="test">Action</Button>
  </InfoCard>
);
export const WithButton: StoryObj<ContainerProps> = {
  render: TemplateWithButton,
};
const TemplateOnlyTitle: StoryFn<typeof InfoCard> = () => (
  <InfoCard>
    <AlertTitle>Une erreur technique est survenue</AlertTitle>
  </InfoCard>
);
export const OnlyTitle: StoryObj<ContainerProps> = {
  render: TemplateOnlyTitle,
};
