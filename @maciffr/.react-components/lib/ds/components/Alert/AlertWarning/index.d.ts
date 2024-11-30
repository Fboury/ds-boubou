import { AlertProps } from "../index";
type OmittedProps = "type";
export interface AlertWarningProps extends Omit<AlertProps, OmittedProps> {
    readonly title: string;
}
declare function AlertWarning({ children, title, variant, ...props }: AlertWarningProps): import("react/jsx-runtime").JSX.Element;
export default AlertWarning;
