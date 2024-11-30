import React from "react";
import Icon, { IconProps } from "../index";

type OmittedProps = "name";

function SearchIcon(props: Omit<IconProps, OmittedProps>) {
  return <Icon name="search" {...props} />;
}

export default SearchIcon;
