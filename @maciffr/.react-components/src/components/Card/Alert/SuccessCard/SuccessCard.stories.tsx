import { StoryObj, StoryFn, Meta } from '@storybook/react';
import SuccessCard, { ContainerProps } from './index';
import AlertTitle from '../components/AlertTitle';
import AlertContent from '../components/AlertContent';
import Button from '../../../Button/Button';

export default {
  title: 'Macif/Components/Card/Alert/Success',
  component: SuccessCard,
  tags: ['autodocs'],
} as Meta<typeof SuccessCard>;

const TemplateBase: StoryFn<typeof SuccessCard> = () => (
  <SuccessCard>
    <AlertTitle>Une erreur technique est survenue</AlertTitle>
    <AlertContent>
      Suite à une erreur technique votre demande n'a pas pu aboutir. Veuillez essayer ultérieurement
      pour finaliser votre demande.
    </AlertContent>
  </SuccessCard>
);
export const Base: StoryObj<ContainerProps> = {
  render: TemplateBase,
};

const TemplateWithButton: StoryFn<typeof SuccessCard> = () => (
  <SuccessCard>
    <AlertTitle>Une erreur technique est survenue</AlertTitle>
    <AlertContent>
      Le service est indisponible pour le moment. Veuillez essayer ultérieurement pour renouveler
      votre demande.
    </AlertContent>
    <Button id="test">Action</Button>
  </SuccessCard>
);
export const WithButton: StoryObj<ContainerProps> = {
  render: TemplateWithButton,
};
const TemplateOnlyTitle: StoryFn<typeof SuccessCard> = () => (
  <SuccessCard>
    <AlertTitle>Une erreur technique est survenue</AlertTitle>
  </SuccessCard>
);
export const OnlyTitle: StoryObj<ContainerProps> = {
  render: TemplateOnlyTitle,
};
