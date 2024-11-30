import type { Meta, StoryObj } from "@storybook/react";
import AlertContent from "./AlertContent";
import AlertHeader from "./AlertHeader";
import AlertInfo from "./AlertInfo";
import AlertWarning from "./AlertWarning";
import Alert, { AlertType, AlertVariant } from "./index";

const meta: Meta = {
  title: "DS/Components/Alert",
  tags: ["autodocs"],
  component: Alert,
} as Meta;

export default meta;

export const Info: StoryObj = {
  render: () => (
    <AlertInfo title="Information">
      <p>Information</p>
    </AlertInfo>
  ),
};

export const InfoRich: StoryObj = {
  render: () => (
    <AlertInfo title="Information" variant={AlertVariant.Rich}>
      <p>Information</p>
    </AlertInfo>
  ),
};

export const WarningRich: StoryObj = {
  render: () => (
    <AlertWarning title="Information" variant={AlertVariant.Rich}>
      <p>Information</p>
    </AlertWarning>
  ),
};

export const Warning: StoryObj = {
  render: () => (
    <AlertWarning title="Information">
      <p>Information</p>
    </AlertWarning>
  ),
};

export const Custom: StoryObj = {
  render: () => (
    <Alert variant={AlertVariant.Big} type={AlertType.Info}>
      <AlertHeader>
        <span className="mds-picto mds-picto__main-feuille" aria-hidden="true" />
        <h2>Titre de l'alerte</h2>
      </AlertHeader>
      <AlertContent>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam interdum quam dapibus interdum suscipit. Ut
          mollis libero vel vulputate porta. Suspendisse et orci aliquam, sagittis neque eu, sagittis magna. Morbi ut
          sodales nibh. Quisque quis erat at felis ultricies facilisis non pretium velit. Mauris ornare mauris in orci
          elementum bibendum...
        </p>
      </AlertContent>
    </Alert>
  ),
};
