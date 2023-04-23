import * as b from "bobril";
import * as constants from "../constants";

interface IBodyNavProps {
  type: string;
  currentView: string;
  monthSelected: string;
  yearSelected: string;
  setMonthSelected: (month: string) => void;
  setYearSelected: (year: string) => void;
  setCurrentView: (view: string) => void;
}

export const BodyNav = (props: IBodyNavProps) => {
  const monthSelected = Number(props.monthSelected) - 1;
  const yearSelected = props.yearSelected;

  function onPreviousClick() {
    if (props.type === "day") {
      if (monthSelected === 0) {
        props.setMonthSelected("12");
        props.setYearSelected(String(Number(yearSelected) - 1));
      } else {
        props.setMonthSelected(String(monthSelected));
      }
    } else {
      props.setYearSelected(String(Number(yearSelected) - 1));
    }
  }

  function onNextClick() {
    if (props.type === "day") {
      if (monthSelected === 11) {
        props.setMonthSelected("1");
        props.setYearSelected(String(Number(yearSelected) + 1));
      } else {
        props.setMonthSelected(String(monthSelected + 2));
      }
    } else {
      props.setYearSelected(String(Number(yearSelected) + 1));
    }
  }

  return (
    <div className="datepicker-body-header">
      <button className="datepicker-previous" onClick={onPreviousClick}>
        &lt;
      </button>
      <div
        className="datepicker-header-text"
        onClick={() =>
          props.currentView == "day"
            ? props.setCurrentView("month")
            : props.setCurrentView("year")
        }
      >
        {props.type === "day"
          ? constants.months[Number(monthSelected)] + " " + yearSelected
          : yearSelected}
      </div>
      <button className="datepicker-next" onClick={onNextClick}>
        &gt;
      </button>
    </div>
  );
};
