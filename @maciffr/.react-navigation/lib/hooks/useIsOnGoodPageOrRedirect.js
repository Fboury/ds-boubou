import { useEffect, useState } from "react";
function isRenderableOrRedirect(navigate, currentPage, setIsRenderable, navigationOptionBuilder) {
    return (targetPage) => {
        const isRenderable = targetPage.equals(currentPage);
        if (isRenderable) {
            setIsRenderable(isRenderable);
        }
        else {
            navigate(targetPage.path, navigationOptionBuilder.targetPage(targetPage).build());
        }
    };
}
export default function useIsOnGoodPageOrRedirect({ currentPage, expectedPage, navigate, pageDefinitionFactory, navigationOptionBuilder }) {
    const [isRenderable, setIsRenderable] = useState(currentPage.equals(expectedPage));
    useEffect(() => {
        if (!expectedPage) {
            pageDefinitionFactory.create()
                .then(isRenderableOrRedirect(navigate, currentPage, setIsRenderable, navigationOptionBuilder));
        }
        else if (!isRenderable) {
            navigate(expectedPage.path, navigationOptionBuilder.targetPage(expectedPage).build());
        }
    }, [currentPage, expectedPage, isRenderable]);
    return isRenderable;
}
//# sourceMappingURL=useIsOnGoodPageOrRedirect.js.map