import React, { useEffect, useState } from "react";
import "./Calendar.css";
/* ----------------------------- Calendar Header ---------------------------- */
import CalendarHeader from "./Header/CalendarHeader";
/* ------------------------------ Calendar Cell ----------------------------- */
import CalendarCell, { CellType } from "./CalendarCell";

import ExtraDate from "../../../commons/ExtraDate";

const DECEMBER = 11;

export interface CalendarProps {
  readonly onChange: (date: Date | null) => void;
  readonly min?: Date;
  readonly max?: Date;
  readonly value?: Date | null;
  readonly classname?: string | null;
}

interface CalendarState {
  currentMonth: number;
  currentYear: number;
  dateList: Array<Date | null>;
  focusedDate?: Date;
}

const Calendar = ({ onChange, value, min, max, classname = "" }: CalendarProps) => {
  const defaultYear = (): number => {
    if (value && new ExtraDate(value).isBetween(min, max)) {
      return value.getFullYear();
    } else if (min && min > new Date()) {
      return min.getFullYear();
    } else if (max && max < new Date()) {
      return max.getFullYear();
    } else {
      return new Date().getFullYear();
    }
  };

  const defaultMonth = (): number => {
    if (value && new ExtraDate(value).isBetween(min, max)) {
      return value.getMonth();
    } else if (min && max && min.getFullYear() === max.getFullYear() && min.getMonth() === max.getMonth()) {
      return min.getMonth();
    } else if (min) {
      return min.getMonth();
    } else if (max && max < new Date()) {
      return max.getMonth();
    } else {
      return new Date().getMonth();
    }
  };

  const [state, setState] = useState<CalendarState>({
    currentMonth: defaultMonth(),
    currentYear: defaultYear(),
    dateList: [],
  });

  useEffect(() => {
    // Éviter les glissements de jours à cause des fuseaux horaires
    // min?.setHours(0);
    // max?.setHours(23, 59);
    const inMinYear = state.currentYear === min?.getFullYear();
    const inMaxYear = state.currentYear === max?.getFullYear();

    if (inMinYear && state.currentMonth < min?.getMonth()) {
      setState({ ...state, currentMonth: min.getMonth() });
      return; // Return to force state refresh -> useEffect trigger
    } else if (inMaxYear && state.currentMonth > max?.getMonth()) {

      setState({ ...state, currentMonth: max.getMonth() });
      return; // Return to force state refresh -> useEffect trigger
    }

    updateCalendar();
  }, [state.currentMonth, state.currentYear]);

  const updateCalendar = () => {
    const currentDay = new Date(state.currentYear, state.currentMonth, 1);
    currentDay.setHours(0);


    const dates: Array<Date | null> = [];

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
    } else {
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
    } else {
      setState({ ...state, currentMonth: previousMonth });
    }
  };

  const getDateCellType = (date: Date | null): CellType => {
    // If empty cell
    if (!date) {
      return CellType.disabled;
    }

    const isToday =
      date.getDate() === new Date().getDate() &&
      date.getMonth() === new Date().getMonth() &&
      date.getFullYear() === new Date().getFullYear();

    const isSelected =
      value?.getDate() === date.getDate() &&
      value?.getMonth() === date.getMonth() &&
      value?.getFullYear() === date.getFullYear();

    // Si date sélectionnée
    if (isSelected) {
      return CellType.selected;
      // Si date du jour
    } if (!new ExtraDate(date).isBetween(min, max)) {
      return CellType.disabled;
    } else if (isToday) {
      return CellType.today;
      // Si avant date du jour
    }

    // Sélectionnable par défaut
    return CellType.selectable;
  };

  const handleDatePick = (date: Date | null) => {
    const minOk = (min && date && date >= min) || !min;
    const maxOk = (max && date && date <= max) || !max;
    if (minOk && maxOk) {
      onChange(date);
    }
  };

  function setMonthYear(selectedMonth: number, selectedYear: number) {
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

  function handleKeyBoardNavigation(date: Date | null, direction: Direction) {
    if (!date) {
      return;
    }

    const A_WEEK = 7;
    let newDate: Date;

    // Navigation au clavier dans le calendar
    switch (direction) {
      case "left":
        newDate = new ExtraDate(date).subDays(1);
        break;
      case "right":
        newDate = new ExtraDate(date).addDays(1);
        break;
      case "up":
        newDate = new ExtraDate(date).subDays(A_WEEK);
        break;
      case "down":
        newDate = new ExtraDate(date).addDays(A_WEEK);
        break;
      default:
        return;
    }

    // Cannot select a non-valid date
    if (new ExtraDate(newDate).isBetween(min, max)) {
      // Update the current date, month and year with new date
      setState({
        ...state,
        focusedDate: newDate,
        currentMonth: newDate.getMonth(),
        currentYear: newDate.getFullYear(),
      });
    }
  }

  return (
    <div className={`calendar mcf-rounded mcf-bg--gris-lune ${classname}`}>

      <CalendarHeader
        min={min}
        max={max}
        month={state.currentMonth}
        year={state.currentYear}
        onNextMonth={setNextMonth}
        onPreviousMonth={setPreviousMonth}
        onChange={setMonthYear}
      />

      {/* Week days */}
      <div
        className="mcf-d--flex mcf-flex mcf-justify-content--around mcf-font-weight--bold"
        style={{ color: "black" }}
      >
        <span>Lun</span>
        <span>Mar</span>
        <span>Mer</span>
        <span>Jeu</span>
        <span>Ven</span>
        <span>Sam</span>
        <span>Dim</span>
      </div>

      {/* Jours du mois */}
      <div className="calendar-body">
        {state.dateList.map((date: Date | null, idx: number) => (
            <CalendarCell
              cellKey={idx.toString()}
              type={getDateCellType(date)}
              date={date}
              empty={!date}
              onPick={handleDatePick}
              onArrowKeyPressed={(direction) => handleKeyBoardNavigation(date, direction)}
              focused={date?.getTime() === state.focusedDate?.getTime()}
            />
        ))}
      </div>
    </div>
  );
};

export type Direction = "up" | "down" | "left" | "right";
export default Calendar;
