import * as b from "bobril";
import * as constants from "../constants";

interface IMonthViewProps {
  dateSelected: string;
  monthSelected: string;
  yearSelected: string;
  setYearSelected: (year: string) => void;
  setMonthSelected: (month: string) => void;
  setCurrentView: (view: string) => void;
}

export const MonthView = (props: IMonthViewProps) => {
  const monthSelected = props.monthSelected;
  const yearSelected = props.yearSelected;
  const dateSelected = props.dateSelected;

  function setActiveMonth(e: b.IBobrilMouseEvent) {
    if (e.target && e.target.orig && e.target.orig.attrs) {
      props.setMonthSelected(e.target.orig.attrs["data-month"]);
      props.setCurrentView("day");
    }
  }

  return (
    <div className="month-view-grid" onClick={setActiveMonth}>
      {/* loop to create 12 months */}
      {[...Array(12).keys()].map((month: any) => {
        return (
          <buttons
            className={
              monthSelected == month + 1
                ? "month-gridview active-month"
                : "month-gridview"
            }
            data-month={month + 1}
          >
            {constants.monthsShort[month]}
          </buttons>
        );
      })}
    </div>
  );
};
