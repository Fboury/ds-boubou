import React from "react";
import Loader from "../Loader";
import Button, { ButtonProps, ButtonTheme } from "../Button";
import LoaderLabel from "../LoaderLabel";

type OmittedProps = "loader";

export interface ButtonLoaderProps extends Omit<ButtonProps, OmittedProps> {
  readonly loading?: boolean;
  readonly accessibilityText?: string;
}

export default function ButtonLoader({
  id,
  icon,
  children,
  theme = ButtonTheme.Primary,
  accessibilityText = "",
  reversed = false,
  loading = false,
  ...props
}: ButtonLoaderProps) {
  return (
    <Button
      id={id}
      theme={theme}
      loader={loading}
      icon={loading ? "" : icon}
      reversed={reversed}
      disabled={loading}
      {...props}
    >
      <LoaderLabel>{accessibilityText}</LoaderLabel>
      {loading ? <Loader reversed={reversed || theme !== ButtonTheme.Primary} /> : children}
    </Button>
  );
}
