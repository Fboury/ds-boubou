import { ButtonProps } from "../Button";
type OmittedProps = "loader";
export interface ButtonLoaderProps extends Omit<ButtonProps, OmittedProps> {
    readonly loading?: boolean;
    readonly accessibilityText?: string;
}
export default function ButtonLoader({ id, icon, children, theme, accessibilityText, reversed, loading, ...props }: ButtonLoaderProps): import("react/jsx-runtime").JSX.Element;
export {};
