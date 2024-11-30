"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CellType = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
require("./CalendarCell.css");
var CellType;
(function (CellType) {
    CellType["today"] = "mcf-border--hover--primary mcf-text--primary mcf-font-weight--bold";
    CellType["disabled"] = "mcf-text--gris-sable calendar-cell-disabled";
    CellType["selected"] = "mcf-border--hover--primary mcf-bg--bleu-fonce mcf-text--white mcf-font-weight--bold";
    CellType["selectable"] = "mcf-border--hover--primary mcf-text--black";
})(CellType || (exports.CellType = CellType = {}));
const CalendarCell = ({ cellKey, empty, date, type = CellType.selectable, onPick, focused, onArrowKeyPressed }) => {
    const cell = (0, react_1.useRef)(null);
    // On component mounted, set the focus to the element
    (0, react_1.useEffect)(() => {
        if (focused) {
            cell.current?.focus();
        }
    });
    function handleKeypress(e) {
        const handledKeys = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
        if (handledKeys.includes(e.key)) {
            e.preventDefault();
            // "ArrowLeft" -> ["Arrow", "Left"] -> "Left" -> "left";
            const dir = e.key.split("Arrow")[1].toLowerCase();
            onArrowKeyPressed(dir);
        }
    }
    function getCursorType(type) {
        switch (type) {
            case CellType.selectable:
            case CellType.today:
                return "pointer";
            default:
                return "default";
        }
    }
    if (empty) {
        return ((0, jsx_runtime_1.jsx)("div", { className: "calendar-cell empty" }));
    }
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: !empty && ((0, jsx_runtime_1.jsx)("a", { className: `calendar-cell mcf-text--center ${type}`, onKeyDown: handleKeypress, ref: cell, href: "src/form/DatePicker/Calendar/CalendarCell#", onClick: (e) => {
                e.preventDefault();
                onPick(date);
            }, tabIndex: type === CellType.disabled ? -1 : undefined, style: {
                textDecoration: "none",
                cursor: getCursorType(type)
            }, children: (0, jsx_runtime_1.jsx)("p", { className: "mcf-text--small-2 mcf-m--0 mcf-m--auto", children: date?.getDate() }) }, cellKey)) }));
};
exports.default = CalendarCell;
//# sourceMappingURL=CalendarCell.js.map