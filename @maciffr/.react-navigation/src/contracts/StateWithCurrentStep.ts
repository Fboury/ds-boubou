import PageDefinition from "./PageDefinition";

export default interface StateWithCurrentStep<T extends PageDefinition> {
    readonly targetPage:T;
}