import { ReactElement, InputHTMLAttributes } from "react";
import { ButtonSwitcherProps } from "./ButtonSwitcher";
import { ValidationMessages } from "../../commons/contrats/ValidationMessages";
/**
 * Composant permettant d'afficher une liste de bouton switcher
 */
export interface ButtonSwitcherGroupProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
    readonly children: ReactElement<ButtonSwitcherProps>[];
    readonly ariaLabelledby: string;
    readonly id: string;
    readonly nbItemsParLigne?: number;
    readonly onChange?: (value: string) => void;
    readonly validationMessage?: ValidationMessages;
}
declare function ButtonSwitcherGroup({ children, id, ariaLabelledby, nbItemsParLigne, onChange, validationMessage, ...props }: ButtonSwitcherGroupProps): import("react/jsx-runtime").JSX.Element;
export default ButtonSwitcherGroup;
