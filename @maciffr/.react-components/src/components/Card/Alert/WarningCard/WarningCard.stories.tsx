import { StoryObj, StoryFn, Meta } from '@storybook/react';
import WarningCard, { ContainerProps } from './index';
import AlertTitle from '../components/AlertTitle';
import AlertContent from '../components/AlertContent';
import Button from '../../../Button/Button';

export default {
  title: 'Macif/Components/Card/Alert/Warning',
  component: WarningCard,
  tags: ['autodocs'],
} as Meta<typeof WarningCard>;

const TemplateBase: StoryFn<typeof WarningCard> = () => (
  <WarningCard>
    <AlertTitle>Une erreur technique est survenue</AlertTitle>
    <AlertContent>
      Suite à une erreur technique votre demande n'a pas pu aboutir. Veuillez essayer ultérieurement
      pour finaliser votre demande.
    </AlertContent>
  </WarningCard>
);
export const Base: StoryObj<ContainerProps> = {
  render: TemplateBase,
};

const TemplateWithButton: StoryFn<typeof WarningCard> = () => (
  <WarningCard>
    <AlertTitle>Une erreur technique est survenue</AlertTitle>
    <AlertContent>
      Le service est indisponible pour le moment. Veuillez essayer ultérieurement pour renouveler
      votre demande.
    </AlertContent>
    <Button id="test">Action</Button>
  </WarningCard>
);
export const WithButton: StoryObj<ContainerProps> = {
  render: TemplateWithButton,
};
const TemplateOnlyTitle: StoryFn<typeof WarningCard> = () => (
  <WarningCard>
    <AlertTitle>Une erreur technique est survenue</AlertTitle>
  </WarningCard>
);
export const OnlyTitle: StoryObj<ContainerProps> = {
  render: TemplateOnlyTitle,
};
