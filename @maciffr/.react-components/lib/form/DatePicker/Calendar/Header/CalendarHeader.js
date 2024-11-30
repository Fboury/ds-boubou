"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("./calendarHeader.css");
/* ------------------------------- Components ------------------------------- */
const ChevronBtn_1 = __importDefault(require("./ChevronBtn"));
const MONTHS = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre"
];
const CalendarHeader = ({ month, year, min, max, onPreviousMonth, onNextMonth, onChange }) => {
    const minMaxSameYear = !!(min && max && min.getFullYear() === max.getFullYear());
    const minMaxSameMonth = minMaxSameYear && min?.getMonth() === max?.getMonth();
    const CHEVRON_WIDTH = 30;
    function onMonthSelect(event) {
        onChange(+event.currentTarget.value, year);
    }
    function onYearSelect(event) {
        onChange(month, +event.currentTarget.value);
    }
    function yearsOptions() {
        const YEAR_RANGE = 120;
        const options = [];
        const minYear = (min && min.getFullYear()) || new Date().getFullYear() - YEAR_RANGE;
        const maxYear = (max && max.getFullYear()) || new Date().getFullYear() + YEAR_RANGE;
        for (let y = minYear; y <= maxYear; y++) {
            options.push((0, jsx_runtime_1.jsx)("option", { value: y, children: y }, y));
        }
        return options;
    }
    function monthsOptions() {
        const options = [];
        let minIndex = 0;
        let maxIndex = 11;
        if (minMaxSameYear || min?.getFullYear() === year) {
            minIndex = min?.getMonth() ?? minIndex;
        }
        if (minMaxSameYear || max?.getFullYear() === year) {
            maxIndex = max?.getMonth() ?? maxIndex;
        }
        for (let i = minIndex; i <= maxIndex; i++) {
            options.push((0, jsx_runtime_1.jsx)("option", { value: i, children: MONTHS[i] }, `month_${i}`));
        }
        return options;
    }
    /* -------------------------------------------------------------------------- */
    /*                               Manage chevrons                              */
    /* -------------------------------------------------------------------------- */
    const chevronVide = (0, jsx_runtime_1.jsx)("div", { style: { width: CHEVRON_WIDTH } });
    function chevronMoisPrecedent() {
        const greaterThanMin = !min || new Date(year, month, 1) > new Date(min?.getFullYear(), min?.getMonth(), 1);
        if (greaterThanMin) {
            return (0, jsx_runtime_1.jsx)(ChevronBtn_1.default, { onClick: onPreviousMonth, direction: "gauche", size: CHEVRON_WIDTH });
        }
        return chevronVide;
    }
    function chevronMoisSuivant() {
        const smallerThanMax = !max || new Date(year, month, 1) < new Date(max?.getFullYear(), max?.getMonth(), 1);
        if (smallerThanMax) {
            return (0, jsx_runtime_1.jsx)(ChevronBtn_1.default, { onClick: onNextMonth, direction: "droite", size: CHEVRON_WIDTH });
        }
        return chevronVide;
    }
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)("div", { className: "calendar-header", children: [chevronMoisPrecedent(), (0, jsx_runtime_1.jsx)("div", { className: "mcf-mr--1 mcf-ml--auto mcf-my--0", children: (0, jsx_runtime_1.jsx)("select", { disabled: minMaxSameMonth, name: "month", id: "month-selector", className: "mcf-rounded mcf-p--2 mcf-border--0 mcf-bg--white", onChange: onMonthSelect, value: month, children: monthsOptions() }) }), (0, jsx_runtime_1.jsx)("div", { className: "mcf-ml--1 mcf-mr--auto", children: (0, jsx_runtime_1.jsx)("select", { disabled: minMaxSameYear, name: "year", id: "year-selector", className: "mcf-rounded mcf-p--2 mcf-border--0 mcf-bg--white", onChange: onYearSelect, value: year, children: yearsOptions() }) }), chevronMoisSuivant()] }) }));
};
exports.default = CalendarHeader;
//# sourceMappingURL=CalendarHeader.js.map