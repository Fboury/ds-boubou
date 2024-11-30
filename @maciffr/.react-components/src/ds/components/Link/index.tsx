import React, { LinkHTMLAttributes, ReactNode } from "react";
import { TextSize } from "../../enums/TextSize";

interface LinkProps extends LinkHTMLAttributes<HTMLAnchorElement> {
  readonly variant?: LinkVariant;
  readonly reverse?: boolean;
  readonly icon?: string;
  readonly size?: TextSize;
  readonly children: ReactNode;
}
export enum LinkVariant {
  Standalone = "mds-link--standalone",
  IconOnly = "mds-link__icon-only",
  Normal = "",
}

const Link = ({
  children,
  size = TextSize.M,
  icon = "",
  variant = LinkVariant.Normal,
  reverse = false,
  ...props
}: LinkProps) => {
  const reverseClass = reverse ? " mds-link--reverse" : "";
  return (
    <a className={`mds-link ${size} ${variant}${reverseClass} ${icon}`} {...props}>
      {children}
    </a>
  );
};

export default Link;
