import * as b from "bobril";
import * as constants from "../constants";
import { BodyNav } from "./BodyNav";
import { DayView } from "./DayView";
import { MonthView } from "./MonthView";
import { YearView } from "./YearView";

interface IDatepickerProps {
  open: boolean;
  type?: string;
  dateSelected: string;
  setOpen: (open: boolean) => void;
}

export const Datepicker = (props: IDatepickerProps) => {
  const [currentView, setCurrentView] = b.useState("day");
  const [dateSelected, setDateSelected] = b.useState(
    `${new Date().getFullYear()}-${
      new Date().getMonth() + 1
    }-${new Date().getDate()}`
  );
  const [yearSelected, setYearSelected] = b.useState(
    dateSelected.split("-")[0]
  );
  const [monthSelected, setMonthSelected] = b.useState(
    dateSelected.split("-")[1]
  );
  const [longDateText, setLongDateText] = b.useState("");

  b.useEffect(() => {
    //whenever date changes, update the longDateText
    const hebrewDayOfWeek =
      constants.daysShort[new Date(dateSelected).getDay()];
    setLongDateText(
      `יום ${hebrewDayOfWeek}, ${new Date(dateSelected).getDate()} ב${
        constants.monthsShort[Number(monthSelected) - 1]
      }`
    );
  }, [dateSelected]);

  function onOverlayClick(e: b.IBobrilMouseEvent) {
    if (e.target.className === "datepicker open") {
      props.setOpen(false);
    }
  }

  return (
    <div
      className={`${props.open ? "datepicker open" : "datepicker"}`}
      onClick={onOverlayClick}
    >
      <div className="datepicker-container">
        <div className="datepicker-header">
          <button
            className="datepicker-year"
            onClick={() => setCurrentView("year")}
          >
            {yearSelected}
          </button>
          <div className="datepicker-date-text">{longDateText}</div>
        </div>
        <div className="datepicker-body">
          <BodyNav
            type={currentView}
            dateSelected={dateSelected}
            currentView={currentView}
            yearSelected={yearSelected}
            monthSelected={monthSelected}
            setMonthSelected={setMonthSelected}
            setYearSelected={setYearSelected}
            setCurrentView={setCurrentView}
          />
          {currentView === "day" && (
            <DayView
              dateSelected={dateSelected}
              setDateSelected={setDateSelected}
              monthSelected={monthSelected}
              yearSelected={yearSelected}
            />
          )}
          {currentView === "month" && (
            <MonthView
              dateSelected={dateSelected}
              yearSelected={yearSelected}
              monthSelected={monthSelected}
              setMonthSelected={setMonthSelected}
              setYearSelected={setYearSelected}
              setCurrentView={setCurrentView}
            />
          )}
          {currentView === "year" && (
            <YearView
              dateSelected={dateSelected}
              yearSelected={yearSelected}
              setYearSelected={setYearSelected}
              setCurrentView={setCurrentView}
            />
          )}
        </div>
        <div className="datepicker-footer">
          <button
            className="datepicker-footer__button"
            onClick={() => props.setOpen(false)}
          >
            בחר
          </button>
          <button
            className="datepicker-footer__button"
            onClick={() => props.setOpen(false)}
          >
            בטל
          </button>
        </div>
      </div>
    </div>
  );
};
