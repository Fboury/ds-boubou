import React, {FormEvent, FormEventHandler, ReactNode, useMemo, useState} from "react";
import WrappedContainer from "../../Containers/WrappedContainer/WrappedContainer";

export interface SelectableChoiceProperties {
    readonly id: string;
    readonly children: ReactNode | undefined;
    readonly label: string;
    readonly onChange?: FormEventHandler<HTMLFieldSetElement>;

}

export default function SelectableChoice({id, label, children, onChange, ...props}: SelectableChoiceProperties) {
    const [errorId, labelId, labelledBy] = useMemo(() => [`error-${id}`, `label-${id}`, `error-${id}, label-${id}`], [id]);
    const [componentState, changeComponentState] = useState({
        errorMessage: "",
        isInvalid: false
    });
    const {errorMessage, isInvalid} = componentState;

    function onInvalidHandler(event: FormEvent<HTMLFieldSetElement>) {
        const target = event.target as HTMLFieldSetElement;

        changeComponentState({
            errorMessage: target.validationMessage,
            isInvalid: !target.validity.valid
        });
    }

    function onChangeHandler(event: FormEvent<HTMLFieldSetElement>) {
        const target = event.target as HTMLFieldSetElement;

        changeComponentState({
            errorMessage: target.validationMessage,
            isInvalid: !target.validity.valid
        });

        onChange && onChange(event);
    }

    return <>
        <fieldset id={id} className="mcf-form-check-list" style={{display: "block"}}
                  onChange={onChangeHandler}
                  onInvalid={onInvalidHandler}
                  aria-invalid={isInvalid}
                  aria-labelledby={labelledBy}
                  {...props}>
            <legend id={labelId}>{label}</legend>
            <WrappedContainer>
                {children}
            </WrappedContainer>
        </fieldset>
        <p id={errorId} role="alert" aria-label="message d'erreur" className="invalid-feedback">
            <i className="icon icon-erreur" aria-hidden={true} hidden={!isInvalid}></i>
            {errorMessage}
        </p>
    </>
}
