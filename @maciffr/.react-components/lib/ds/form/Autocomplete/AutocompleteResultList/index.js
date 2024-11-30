"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const AutocompleteResultList = (0, react_1.forwardRef)(({ children, activeIndex = 0, onSelect = () => { }, ...props }, ref) => {
    const itemsRef = (0, react_1.useRef)([]);
    (0, react_1.useImperativeHandle)(ref, () => itemsRef.current);
    const renderChildrenList = react_1.Children.map(children, (child, index) => {
        return (0, react_1.cloneElement)(child, {
            active: index === activeIndex,
            ref: (el) => (itemsRef.current[index] = el),
            onSelect,
        });
    });
    return ((0, jsx_runtime_1.jsx)("ul", { className: "mds-autocomplete__result", role: "listbox", ...props, children: renderChildrenList }));
});
AutocompleteResultList.displayName = "AutocompleteResultList";
exports.default = AutocompleteResultList;
//# sourceMappingURL=index.js.map