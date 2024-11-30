"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
require("./Calendar.css");
/* ----------------------------- Calendar Header ---------------------------- */
const CalendarHeader_1 = __importDefault(require("./Header/CalendarHeader"));
/* ------------------------------ Calendar Cell ----------------------------- */
const CalendarCell_1 = __importStar(require("./CalendarCell"));
const ExtraDate_1 = __importDefault(require("../../../commons/ExtraDate"));
const DECEMBER = 11;
const Calendar = ({ onChange, value, min, max, classname = "" }) => {
    const defaultYear = () => {
        if (value && new ExtraDate_1.default(value).isBetween(min, max)) {
            return value.getFullYear();
        }
        else if (min && min > new Date()) {
            return min.getFullYear();
        }
        else if (max && max < new Date()) {
            return max.getFullYear();
        }
        else {
            return new Date().getFullYear();
        }
    };
    const defaultMonth = () => {
        if (value && new ExtraDate_1.default(value).isBetween(min, max)) {
            return value.getMonth();
        }
        else if (min && max && min.getFullYear() === max.getFullYear() && min.getMonth() === max.getMonth()) {
            return min.getMonth();
        }
        else if (min) {
            return min.getMonth();
        }
        else if (max && max < new Date()) {
            return max.getMonth();
        }
        else {
            return new Date().getMonth();
        }
    };
    const [state, setState] = (0, react_1.useState)({
        currentMonth: defaultMonth(),
        currentYear: defaultYear(),
        dateList: [],
    });
    (0, react_1.useEffect)(() => {
        // Éviter les glissements de jours à cause des fuseaux horaires
        // min?.setHours(0);
        // max?.setHours(23, 59);
        const inMinYear = state.currentYear === min?.getFullYear();
        const inMaxYear = state.currentYear === max?.getFullYear();
        if (inMinYear && state.currentMonth < min?.getMonth()) {
            setState({ ...state, currentMonth: min.getMonth() });
            return; // Return to force state refresh -> useEffect trigger
        }
        else if (inMaxYear && state.currentMonth > max?.getMonth()) {
            setState({ ...state, currentMonth: max.getMonth() });
            return; // Return to force state refresh -> useEffect trigger
        }
        updateCalendar();
    }, [state.currentMonth, state.currentYear]);
    const updateCalendar = () => {
        const currentDay = new Date(state.currentYear, state.currentMonth, 1);
        currentDay.setHours(0);
        const dates = [];
        while (currentDay.getMonth() === state.currentMonth) {
            dates.push(new Date(currentDay));
            currentDay.setDate(currentDay.getDate() + 1);
        }
        let startingDay = dates[0]?.getDay() ?? 7;
        // Si mois début le dimanche, day = 0 donc il faut le mettre à 6 pour bien décaller la première ligne du calendrier
        for (let i = 1; i < startingDay; i++) {
            dates.unshift(null);
        }
        setState({ ...state, dateList: dates });
    };
    const setNextMonth = () => {
        const nextMonth = state.currentMonth + 1;
        if (nextMonth > DECEMBER) {
            setState({ ...state, currentMonth: 0, currentYear: state.currentYear + 1 });
        }
        else {
            setState({ ...state, currentMonth: nextMonth });
        }
    };
    const setPreviousMonth = () => {
        const previousMonth = state.currentMonth - 1;
        if (previousMonth < 0) {
            setState({
                ...state,
                currentMonth: DECEMBER,
                currentYear: state.currentYear - 1,
            });
        }
        else {
            setState({ ...state, currentMonth: previousMonth });
        }
    };
    const getDateCellType = (date) => {
        // If empty cell
        if (!date) {
            return CalendarCell_1.CellType.disabled;
        }
        const isToday = date.getDate() === new Date().getDate() &&
            date.getMonth() === new Date().getMonth() &&
            date.getFullYear() === new Date().getFullYear();
        const isSelected = value?.getDate() === date.getDate() &&
            value?.getMonth() === date.getMonth() &&
            value?.getFullYear() === date.getFullYear();
        // Si date sélectionnée
        if (isSelected) {
            return CalendarCell_1.CellType.selected;
            // Si date du jour
        }
        if (!new ExtraDate_1.default(date).isBetween(min, max)) {
            return CalendarCell_1.CellType.disabled;
        }
        else if (isToday) {
            return CalendarCell_1.CellType.today;
            // Si avant date du jour
        }
        // Sélectionnable par défaut
        return CalendarCell_1.CellType.selectable;
    };
    const handleDatePick = (date) => {
        const minOk = (min && date && date >= min) || !min;
        const maxOk = (max && date && date <= max) || !max;
        if (minOk && maxOk) {
            onChange(date);
        }
    };
    function setMonthYear(selectedMonth, selectedYear) {
        if (state.currentMonth !== selectedMonth) {
            setState({
                ...state,
                currentMonth: selectedMonth,
            });
        }
        if (state.currentYear !== selectedYear) {
            setState({
                ...state,
                currentYear: selectedYear,
            });
        }
    }
    function handleKeyBoardNavigation(date, direction) {
        if (!date) {
            return;
        }
        const A_WEEK = 7;
        let newDate;
        // Navigation au clavier dans le calendar
        switch (direction) {
            case "left":
                newDate = new ExtraDate_1.default(date).subDays(1);
                break;
            case "right":
                newDate = new ExtraDate_1.default(date).addDays(1);
                break;
            case "up":
                newDate = new ExtraDate_1.default(date).subDays(A_WEEK);
                break;
            case "down":
                newDate = new ExtraDate_1.default(date).addDays(A_WEEK);
                break;
            default:
                return;
        }
        // Cannot select a non-valid date
        if (new ExtraDate_1.default(newDate).isBetween(min, max)) {
            // Update the current date, month and year with new date
            setState({
                ...state,
                focusedDate: newDate,
                currentMonth: newDate.getMonth(),
                currentYear: newDate.getFullYear(),
            });
        }
    }
    return ((0, jsx_runtime_1.jsxs)("div", { className: `calendar mcf-rounded mcf-bg--gris-lune ${classname}`, children: [(0, jsx_runtime_1.jsx)(CalendarHeader_1.default, { min: min, max: max, month: state.currentMonth, year: state.currentYear, onNextMonth: setNextMonth, onPreviousMonth: setPreviousMonth, onChange: setMonthYear }), (0, jsx_runtime_1.jsxs)("div", { className: "mcf-d--flex mcf-flex mcf-justify-content--around mcf-font-weight--bold", style: { color: "black" }, children: [(0, jsx_runtime_1.jsx)("span", { children: "Lun" }), (0, jsx_runtime_1.jsx)("span", { children: "Mar" }), (0, jsx_runtime_1.jsx)("span", { children: "Mer" }), (0, jsx_runtime_1.jsx)("span", { children: "Jeu" }), (0, jsx_runtime_1.jsx)("span", { children: "Ven" }), (0, jsx_runtime_1.jsx)("span", { children: "Sam" }), (0, jsx_runtime_1.jsx)("span", { children: "Dim" })] }), (0, jsx_runtime_1.jsx)("div", { className: "calendar-body", children: state.dateList.map((date, idx) => ((0, jsx_runtime_1.jsx)(CalendarCell_1.default, { cellKey: idx.toString(), type: getDateCellType(date), date: date, empty: !date, onPick: handleDatePick, onArrowKeyPressed: (direction) => handleKeyBoardNavigation(date, direction), focused: date?.getTime() === state.focusedDate?.getTime() }))) })] }));
};
exports.default = Calendar;
//# sourceMappingURL=index.js.map