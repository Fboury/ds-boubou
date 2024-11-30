import PageDefinition from "./PageDefinition";
import {NavigationOptions} from "./NavigationFunction";

export interface NavigationOptionBuilder<T extends PageDefinition> {
    targetPage(targetPage:PageDefinition):NavigationOptionBuilder<T>;
    build():NavigationOptions<T>;
}