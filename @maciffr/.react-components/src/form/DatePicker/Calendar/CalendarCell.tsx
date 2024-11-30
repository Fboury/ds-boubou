import React, {useEffect, useRef} from "react";
import "./CalendarCell.css";
import {Direction} from "./index";

interface CalendarCellProps {
  readonly cellKey: string;
  readonly empty: boolean;
  readonly date: Date | null;
  readonly type?: CellType;
  readonly onPick: (date: Date | null) => void;
  readonly focused?: boolean;
  readonly onArrowKeyPressed: (direction: Direction) => void;
}

export enum CellType {
  today = "mcf-border--hover--primary mcf-text--primary mcf-font-weight--bold",
  disabled = "mcf-text--gris-sable calendar-cell-disabled",
  selected = "mcf-border--hover--primary mcf-bg--bleu-fonce mcf-text--white mcf-font-weight--bold",
  selectable = "mcf-border--hover--primary mcf-text--black"
}

const CalendarCell = ({
                        cellKey,
                        empty,
                        date,
                        type = CellType.selectable,
                        onPick,
                        focused,
                        onArrowKeyPressed
                      }: CalendarCellProps) => {
  const cell = useRef<HTMLAnchorElement>(null);

  // On component mounted, set the focus to the element
  useEffect(() => {
    if (focused) {
      cell.current?.focus();
    }
  });

  function handleKeypress(e: React.KeyboardEvent) {
    const handledKeys = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
    if (handledKeys.includes(e.key)) {
      e.preventDefault();
      // "ArrowLeft" -> ["Arrow", "Left"] -> "Left" -> "left";
      const dir = e.key.split("Arrow")[1].toLowerCase() as Direction;
      onArrowKeyPressed(dir);
    }
  }

  function getCursorType(type: CellType) {
    switch (type) {
      case CellType.selectable:
      case CellType.today:
        return "pointer";
      default:
        return "default";
    }
  }

  if (empty) {
    return (
      <div className={"calendar-cell empty"}>

      </div>
    )
  }

  return (

    <>
      {!empty && (
        <a
          key={cellKey}
          className={`calendar-cell mcf-text--center ${type}`}
          onKeyDown={handleKeypress}
          ref={cell}
          href="src/form/DatePicker/Calendar/CalendarCell#"
          onClick={(e: React.MouseEvent) => {
            e.preventDefault();
            onPick(date);
          }}
          tabIndex={type === CellType.disabled ? -1 : undefined}

          style={{
            textDecoration: "none",
            cursor: getCursorType(type)
          }}
        >
          <p className="mcf-text--small-2 mcf-m--0 mcf-m--auto">{date?.getDate()}</p>
        </a>
      )}
    </>
  );
};

export default CalendarCell;
