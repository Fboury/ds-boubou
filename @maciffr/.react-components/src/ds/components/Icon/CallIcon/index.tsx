import React from "react";
import Icon, { IconProps } from "../index";

type OmittedProps = "name";

function CallIcon(props: Omit<IconProps, OmittedProps>) {
  return <Icon name="call" {...props} />;
}

export default CallIcon;
