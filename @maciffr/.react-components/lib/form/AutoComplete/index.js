"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const AutoCompleteInput_1 = __importDefault(require("./view/AutoCompleteInput"));
const SuggestionList_1 = __importDefault(require("./view/SuggestionList"));
const Erreur_1 = __importDefault(require("./view/Erreur"));
const constantes_1 = require("./constantes");
const SuggestionHeader_1 = __importDefault(require("./view/SuggestionHeader"));
const AutoComplete = (0, react_1.forwardRef)(({ id, options, erreur, onSearch, describeLabel, onSelect, defaultValue, maxLength, description, ...props }, ref) => {
    const autocompleteRef = (0, react_1.useRef)(null);
    const [firstItem] = options;
    const [visible, setVisible] = (0, react_1.useState)(false);
    const [activeItem, setActiveItem] = (0, react_1.useState)(firstItem);
    const [recherche, setRecherche] = (0, react_1.useState)("");
    const [selectedItem, setSelectedItem] = (0, react_1.useState)(defaultValue ?? firstItem);
    (0, react_1.useImperativeHandle)(ref, () => autocompleteRef.current);
    const handleSelect = (item) => {
        onSelect && onSelect(item);
        setSelectedItem(item);
        setVisible(false);
        setActiveItem(undefined);
    };
    (0, react_1.useEffect)(() => {
        if (options.length > 0) {
            setActiveItem(firstItem);
        }
    }, [options]);
    const handleTextChange = (event) => {
        const value = event?.target?.value?.replace(constantes_1.REGEX_ONLY_ALPHANUMERIC_SPACES, "")?.trimStart();
        handleSelect(undefined);
        setVisible(true);
        setRecherche(value);
        onSearch(value);
        setActiveItem(firstItem);
    };
    const isActive = (item) => activeItem === item;
    const selectNextItem = () => {
        if (!activeItem) {
            return;
        }
        const currentIndex = options.indexOf(activeItem);
        const nextIndex = currentIndex < options.length - 1 ? currentIndex + 1 : 0;
        setActiveItem(options[nextIndex]);
    };
    const selectPreviousItem = () => {
        if (!activeItem) {
            return;
        }
        const currentIndex = options.indexOf(activeItem);
        const previousIndex = currentIndex > 0 ? currentIndex - 1 : options.length - 1;
        setActiveItem(options[previousIndex]);
    };
    const handleDefaultKeyPress = () => {
        if (autocompleteRef.current) {
            autocompleteRef.current.focus();
        }
    };
    const handleKeyDown = (event) => {
        if (!activeItem) {
            return;
        }
        switch (event.key) {
            case constantes_1.KEYS.DOWN:
                event.preventDefault();
                selectNextItem();
                break;
            case constantes_1.KEYS.UP:
                event.preventDefault();
                selectPreviousItem();
                break;
            case constantes_1.KEYS.ENTER:
                event.preventDefault();
                handleSelect(activeItem);
                break;
            case constantes_1.KEYS.ESCAPE:
                event.preventDefault();
                setVisible(false);
                break;
            default:
                handleDefaultKeyPress();
                break;
        }
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", { className: "mcf-m--0 mcf-mb--4 mcf-form-group mcf-dropdown", children: [(0, jsx_runtime_1.jsx)(AutoCompleteInput_1.default, { id: id, ref: autocompleteRef, maxLength: maxLength, onKeyDown: handleKeyDown, value: selectedItem?.value || recherche, erreur: erreur, describeLabel: describeLabel, onChange: handleTextChange, visible: visible, activeElement: activeItem?.key ? `suggestion-${activeItem?.key}` : undefined, ...props }), (0, jsx_runtime_1.jsxs)("div", { id: "suggestion-wrapper", className: `mcf-mb--4 mcf-dropdown__menu mcf-position--relative mcf-w--100 ${(visible && options?.length > 0) && "show"}`, children: [(description && visible) && (0, jsx_runtime_1.jsx)(SuggestionHeader_1.default, { children: description }), (0, jsx_runtime_1.jsx)(SuggestionList_1.default, { id: id, data: options, isActive: isActive, onSelect: handleSelect })] }), (0, jsx_runtime_1.jsx)(Erreur_1.default, { id: id, message: erreur })] }), (0, jsx_runtime_1.jsx)("div", { "aria-live": "polite", "aria-atomic": "true", className: "mcf-sr-only", children: visible && (0, jsx_runtime_1.jsxs)("p", { children: [options.length, " suggestions"] }) })] }));
});
exports.default = AutoComplete;
//# sourceMappingURL=index.js.map