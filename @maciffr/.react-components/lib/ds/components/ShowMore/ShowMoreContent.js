"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const ShowMoreContent = ({ open, active, size, children }) => {
    const contentRef = (0, react_1.useRef)(null);
    const [contentMaxHeight, setContentMaxHeight] = (0, react_1.useState)(0);
    const [tabIndex, contentHeight] = open ? [0, contentMaxHeight] : [-1, 0];
    (0, react_1.useEffect)(() => {
        if (contentRef?.current?.scrollHeight && contentRef?.current?.scrollHeight > 0) {
            setContentMaxHeight(contentRef.current.scrollHeight + 16);
        }
    }, [contentRef]);
    return ((0, jsx_runtime_1.jsx)("div", { ref: contentRef, className: `mds-collapse__content${active} ${size}`, tabIndex: tabIndex, style: { maxHeight: contentHeight }, children: children }));
};
exports.default = ShowMoreContent;
//# sourceMappingURL=ShowMoreContent.js.map