import React from "react";
import Icon, { IconProps } from "../index";

type OmittedProps = "name";

function InfoIcon(props: Omit<IconProps, OmittedProps>) {
  return <Icon name="info" {...props} />;
}

export default InfoIcon;
