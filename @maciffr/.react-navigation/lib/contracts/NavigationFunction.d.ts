import StateWithCurrentStep from "./StateWithCurrentStep";
import PageDefinition from "./PageDefinition";
export interface NavigationOptions<T extends PageDefinition> {
    state: StateWithCurrentStep<T>;
}
type NavigationFunction<T extends PageDefinition> = (to: string, option?: NavigationOptions<T>) => void;
export default NavigationFunction;
