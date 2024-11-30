import React from "react";
import Icon, { IconProps } from "../index";

type OmittedProps = "name";

function MailIcon(props: Omit<IconProps, OmittedProps>) {
  return <Icon name="mail" {...props} />;
}

export default MailIcon;
