import React from "react";
import Icon, { IconProps } from "../index";

type OmittedProps = "name";

function ReportIcon(props: Omit<IconProps, OmittedProps>) {
  return <Icon name="report" {...props} />;
}

export default ReportIcon;
