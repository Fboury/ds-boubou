import PageDefinition from "../contracts/PageDefinition";
import NavigationFunction from "../contracts/NavigationFunction";
import PageDefinitionFactory from "../contracts/PageDefinitionFactory";
import { NavigationOptionBuilder } from "../contracts/NavigationOptionBuilder";
interface UseIsOnGoodPageOrRedirectParams<T extends PageDefinition> {
    readonly currentPage: PageDefinition;
    readonly expectedPage?: PageDefinition;
    readonly pageDefinitionFactory: PageDefinitionFactory;
    readonly navigate: NavigationFunction<T>;
    readonly navigationOptionBuilder: NavigationOptionBuilder<T>;
}
export default function useIsOnGoodPageOrRedirect<T extends PageDefinition>({ currentPage, expectedPage, navigate, pageDefinitionFactory, navigationOptionBuilder }: UseIsOnGoodPageOrRedirectParams<T>): boolean;
export {};
