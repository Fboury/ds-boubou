import { AlertProps } from "../index";
type OmittedProps = "type";
export interface AlertInfoProps extends Omit<AlertProps, OmittedProps> {
    readonly title: string;
}
declare function AlertInfo({ children, title, variant, ...props }: AlertInfoProps): import("react/jsx-runtime").JSX.Element;
export default AlertInfo;
