"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MOCK_SUGGESTION_LIST_HTML = exports.MOCK_SUGGESTION_LIST = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
exports.MOCK_SUGGESTION_LIST = [
    {
        key: "C1",
        value: "Agriculteur",
    },
    {
        key: "C2",
        value: "Menuisier",
    },
];
exports.MOCK_SUGGESTION_LIST_HTML = [
    {
        key: "C1",
        value: "Agriculteur",
        libelle: ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: ["Agriculteur ", (0, jsx_runtime_1.jsx)("strong", { children: "avec HTML" })] })),
    },
    {
        key: "C2",
        value: "Menuisier",
        libelle: ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: ["Menuisier ", (0, jsx_runtime_1.jsx)("strong", { children: "avec HTML" })] })),
    },
];
//# sourceMappingURL=SuggestionList.js.map