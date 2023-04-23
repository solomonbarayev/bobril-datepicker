import * as b from "bobril";
import * as constants from "../constants";

interface DayViewProps {
  dateSelected: string;
  monthSelected: string;
  yearSelected: string;
  setDateSelected: (date: string) => void;
}

export function DayView({
  dateSelected,
  monthSelected,
  yearSelected,
  setDateSelected,
}: DayViewProps) {
  const [firstDay, setFirstDay] = b.useState(
    new Date(Number(yearSelected), Number(monthSelected) - 1, 1).getDay()
  );

  const [daysInMonth, setDaysInMonth] = b.useState(
    new Date(Number(yearSelected), Number(monthSelected), 0).getDate()
  );

  const currentDate = new Date().toISOString().split("T")[0];

  function setActiveDate(e: b.IBobrilMouseEvent) {
    if (e.target && e.target.attrs && e.target.attrs["data-date"]) {
      setDateSelected(e.target.attrs["data-date"]);
    }
  }

  function datesEqual(date1: string, date2: string) {
    return (
      new Date(date1).toISOString().split("T")[0].toString() ==
      new Date(date2).toISOString().split("T")[0].toString()
    );
  }

  function getDateClass(day: number) {
    let customClass = "datepicker-day";

    const date =
      yearSelected + "-" + monthSelected + "-" + (day + 1).toString();

    if (datesEqual(date, dateSelected)) {
      customClass += " active";
    } else if (datesEqual(date, currentDate)) {
      customClass += " today";
    }

    return customClass;
  }

  return (
    <div>
      <div className="datepicker-days">
        {constants.daysShort.map((day: any) => {
          return <div className="datepicker-day">{day}</div>;
        })}
      </div>

      <div className="datepicker-calendar" onClick={setActiveDate}>
        {[...Array(firstDay).keys()].map((day: any) => {
          return <div className="datepicker-day"></div>;
        })}

        {[...Array(daysInMonth).keys()].map((day: any) => {
          return (
            <div
              data-date={
                yearSelected + "-" + monthSelected + "-" + (day + 1).toString()
              }
              className={getDateClass(day)}
            >
              {day + 1}
            </div>
          );
        })}
      </div>
    </div>
  );
}
