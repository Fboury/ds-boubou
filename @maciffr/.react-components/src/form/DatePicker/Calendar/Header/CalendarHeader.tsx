import React from "react";
import "./calendarHeader.css";

/* ------------------------------- Components ------------------------------- */
import ChevronBtn from "./ChevronBtn";
export interface CalendarHeaderProps {
  readonly month: number;
  readonly year: number;
  readonly min?: Date;
  readonly max?: Date;
  readonly onPreviousMonth: () => unknown;
  readonly onNextMonth: () => unknown;
  readonly onChange: (month: number, year: number) => unknown;
}

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

const CalendarHeader = ({
  month,
  year,
  min,
  max,
  onPreviousMonth,
  onNextMonth,
  onChange
}: CalendarHeaderProps) => {
  const minMaxSameYear: boolean = !!(min && max && min.getFullYear() === max.getFullYear());
  const minMaxSameMonth: boolean = minMaxSameYear && min?.getMonth() === max?.getMonth();
  const CHEVRON_WIDTH = 30;

  function onMonthSelect(event: React.SyntheticEvent<HTMLSelectElement>) {
    onChange(+event.currentTarget.value, year);
  }

  function onYearSelect(event: React.SyntheticEvent<HTMLSelectElement>) {
    onChange(month, +event.currentTarget.value);
  }

  function yearsOptions(): Array<React.ReactNode> {
    const YEAR_RANGE = 120;
    const options: Array<React.ReactNode> = [];

    const minYear = (min && min.getFullYear()) || new Date().getFullYear() - YEAR_RANGE;
    const maxYear = (max && max.getFullYear()) || new Date().getFullYear() + YEAR_RANGE;

    for (let y = minYear; y <= maxYear; y++) {
      options.push(
        <option value={y} key={y}>
          {y}
        </option>
      );
    }

    return options;
  }

  function monthsOptions(): Array<React.ReactNode> {
    const options: Array<React.ReactNode> = [];
    let minIndex = 0;
    let maxIndex = 11;

    if (minMaxSameYear || min?.getFullYear() === year) {
      minIndex = min?.getMonth() ?? minIndex;
    }

    if (minMaxSameYear || max?.getFullYear() === year) {
      maxIndex = max?.getMonth() ?? maxIndex;
    }

    for (let i = minIndex; i <= maxIndex; i++) {
      options.push(
        <option value={i} key={`month_${i}`}>
          {MONTHS[i]}
        </option>
      );
    }

    return options;
  }


  /* -------------------------------------------------------------------------- */
  /*                               Manage chevrons                              */
  /* -------------------------------------------------------------------------- */
  const chevronVide = <div style={{ width: CHEVRON_WIDTH }}></div>;

  function chevronMoisPrecedent(): React.ReactElement {
    const greaterThanMin = !min || new Date(year, month, 1) > new Date(min?.getFullYear(), min?.getMonth(), 1);

    if (greaterThanMin) {
      return <ChevronBtn onClick={onPreviousMonth} direction="gauche" size={CHEVRON_WIDTH} />
    }

    return chevronVide
  }

  function chevronMoisSuivant(): React.ReactElement {
    const smallerThanMax = !max || new Date(year, month, 1) < new Date(max?.getFullYear(), max?.getMonth(), 1);

    if (smallerThanMax) {
      return <ChevronBtn onClick={onNextMonth} direction="droite" size={CHEVRON_WIDTH} />;
    }
    return chevronVide;
  }

  return (
    <>
      {/* Month Selector */}
      <div className="calendar-header">
        {/* Previous Month */}
        {chevronMoisPrecedent()}

        {/* Month selector */}
        <div className="mcf-mr--1 mcf-ml--auto mcf-my--0">
          <select
            disabled={minMaxSameMonth}
            name="month"
            id="month-selector"
            className="mcf-rounded mcf-p--2 mcf-border--0 mcf-bg--white"
            onChange={onMonthSelect}
            value={month}
          >
            {monthsOptions()}
          </select>
        </div>

        {/* Year Selector */}
        <div className="mcf-ml--1 mcf-mr--auto">
          <select
            disabled={minMaxSameYear}
            name="year"
            id="year-selector"
            className="mcf-rounded mcf-p--2 mcf-border--0 mcf-bg--white"
            onChange={onYearSelect}
            value={year}
          >
            {yearsOptions()}
          </select>
        </div>

        {/* Next Month */}
        {chevronMoisSuivant()}
      </div>
    </>
  );
};

export default CalendarHeader;
