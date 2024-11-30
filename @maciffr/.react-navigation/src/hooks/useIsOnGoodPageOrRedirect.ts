import PageDefinition from "../contracts/PageDefinition";
import NavigationFunction from "../contracts/NavigationFunction";
import {useEffect, useState} from "react";
import PageDefinitionFactory from "../contracts/PageDefinitionFactory";
import {NavigationOptionBuilder} from "../contracts/NavigationOptionBuilder";

interface UseIsOnGoodPageOrRedirectParams<T extends PageDefinition> {
    readonly currentPage: PageDefinition;
    readonly expectedPage?: PageDefinition;
    readonly pageDefinitionFactory: PageDefinitionFactory;
    readonly navigate: NavigationFunction<T>;
    readonly navigationOptionBuilder: NavigationOptionBuilder<T>;
}

function isRenderableOrRedirect<T extends PageDefinition>(
    navigate: NavigationFunction<T>,
    currentPage: PageDefinition,
    setIsRenderable: React.Dispatch<React.SetStateAction<boolean>>,
    navigationOptionBuilder: NavigationOptionBuilder<T>
) {
    return (targetPage: PageDefinition) => {
        const isRenderable = targetPage.equals(currentPage);

        if (isRenderable) {
            setIsRenderable(isRenderable);
        } else {
            navigate(targetPage.path, navigationOptionBuilder.targetPage(targetPage).build());
        }
    };
}

export default function useIsOnGoodPageOrRedirect<T extends PageDefinition>({
                                                                                currentPage,
                                                                                expectedPage,
                                                                                navigate,
                                                                                pageDefinitionFactory,
                                                                                navigationOptionBuilder
                                                                            }: UseIsOnGoodPageOrRedirectParams<T>): boolean {
    const [isRenderable, setIsRenderable] = useState(currentPage.equals(expectedPage));

    useEffect(() => {
        if (!expectedPage) {
            pageDefinitionFactory.create()
                .then(isRenderableOrRedirect(navigate, currentPage, setIsRenderable, navigationOptionBuilder));
        } else if (!isRenderable) {
            navigate(expectedPage.path, navigationOptionBuilder.targetPage(expectedPage).build());
        }
    }, [currentPage, expectedPage, isRenderable]);

    return isRenderable;
}