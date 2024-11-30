"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkVariant = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const TextSize_1 = require("../../enums/TextSize");
var LinkVariant;
(function (LinkVariant) {
    LinkVariant["Standalone"] = "mds-link--standalone";
    LinkVariant["IconOnly"] = "mds-link__icon-only";
    LinkVariant["Normal"] = "";
})(LinkVariant || (exports.LinkVariant = LinkVariant = {}));
const Link = ({ children, size = TextSize_1.TextSize.M, icon = "", variant = LinkVariant.Normal, reverse = false, ...props }) => {
    const reverseClass = reverse ? " mds-link--reverse" : "";
    return ((0, jsx_runtime_1.jsx)("a", { className: `mds-link ${size} ${variant}${reverseClass} ${icon}`, ...props, children: children }));
};
exports.default = Link;
//# sourceMappingURL=index.js.map