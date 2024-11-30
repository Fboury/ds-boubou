"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const InputCell_1 = __importDefault(require("../InputCell"));
const AutocompleteResultList_1 = __importDefault(require("./AutocompleteResultList"));
const constantes_1 = require("./constantes");
const Erreur_1 = __importDefault(require("../../components/Erreur/Erreur"));
const Autocomplete = (0, react_1.forwardRef)(({ id, children, required, search, error, value, validationMessage, onSearch, onSelect, visible = false, "aria-describedby": ariaDescribedBy = "", onToggle = () => { }, ...props }, ref) => {
    const autocompleteRef = (0, react_1.useRef)(null);
    const errorId = (0, react_1.useMemo)(() => `error-${id}`, [id]);
    const [errorMessage, setErrorMessage] = (0, react_1.useState)("");
    const [activeIndex, setActiveIndex] = (0, react_1.useState)(0);
    const itemsRef = (0, react_1.useRef)([]);
    (0, react_1.useEffect)(() => {
        setErrorMessage(error ?? errorMessage);
    }, [error]);
    (0, react_1.useImperativeHandle)(ref, () => autocompleteRef.current);
    const selectNextItem = () => {
        const nextIndex = activeIndex < itemsRef.current.length - 1 ? activeIndex + 1 : 0;
        setActiveIndex(nextIndex);
    };
    const selectPreviousItem = () => {
        const previousIndex = activeIndex > 0 ? activeIndex - 1 : itemsRef.current.length - 1;
        setActiveIndex(previousIndex);
    };
    const handleDefaultKeyPress = () => {
        if (autocompleteRef.current) {
            autocompleteRef.current.focus();
        }
    };
    const selectCurrentChildren = () => {
        if (itemsRef.current) {
            const child = itemsRef.current[activeIndex];
            const code = child.getAttribute("data-code") ?? "";
            const value = child.getAttribute("data-value") ?? "";
            selectItem({ code, value });
        }
    };
    const handleKeyDown = (event) => {
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
                selectCurrentChildren();
                break;
            case constantes_1.KEYS.ESCAPE:
                event.preventDefault();
                onToggle(false);
                break;
            default:
                handleDefaultKeyPress();
                break;
        }
    };
    const handleSearch = (event) => {
        const value = event.target.value;
        onSelect();
        onSearch(value);
        onToggle(true);
    };
    const selectItem = (item) => {
        onSelect(item);
        setActiveIndex(0);
        onToggle(false);
    };
    const handleSelect = (item) => {
        autocompleteRef.current?.setCustomValidity("");
        setErrorMessage("");
        selectItem(item);
    };
    const updateErrorState = (input, message) => {
        // enlève la popup HTML de la validation
        input.setCustomValidity(" ");
        setErrorMessage(message);
    };
    const validate = (input) => {
        input.setCustomValidity("");
        const { validity } = input;
        if (validity.valid && value) {
            setErrorMessage("");
            return true;
        }
        if (validity.valueMissing || !value) {
            updateErrorState(input, validationMessage?.required || constantes_1.VALIDATION_MESSAGES.required);
            return false;
        }
        return false;
    };
    const handleInvalid = (event) => {
        validate(event.target);
    };
    const renderChildrenList = react_1.Children.map(children, (child) => {
        if (child.type == AutocompleteResultList_1.default) {
            return (0, react_1.cloneElement)(child, {
                onSelect: handleSelect,
                ref: (el) => (itemsRef.current = el),
                activeIndex,
            });
        }
        return child;
    });
    const handleBlur = (event) => {
        if (!event.relatedTarget || !event.currentTarget.contains(event.relatedTarget)) {
            onToggle(false);
        }
    };
    return ((0, jsx_runtime_1.jsxs)("div", { onBlur: handleBlur, children: [(0, jsx_runtime_1.jsx)(InputCell_1.default, { children: (0, jsx_runtime_1.jsx)("input", { id: id, ref: autocompleteRef, type: "text", value: value ?? search ?? "", onKeyDown: handleKeyDown, onChange: handleSearch, onInvalid: handleInvalid, className: "mds-input", "aria-describedby": `${ariaDescribedBy}${errorMessage ? ` ${errorId}` : ""}`, "aria-invalid": !!errorMessage, "aria-required": required, required: required, "aria-autocomplete": "list", "aria-owns": `${id}-results`, role: "combobox", ...props }) }), (0, jsx_runtime_1.jsx)("div", { className: "mds-autocomplete", children: visible && renderChildrenList }), (0, jsx_runtime_1.jsx)(Erreur_1.default, { id: errorId, children: errorMessage })] }));
});
exports.default = Autocomplete;
//# sourceMappingURL=index.js.map