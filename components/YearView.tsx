import * as b from "bobril";

interface IYearviewProps {
  dateSelected: string;
  yearSelected: string;
  setYearSelected: (year: string) => void;
  setCurrentView: (view: string) => void;
}

export const YearView = (props: IYearviewProps) => {
  const [dateSelected, setDateSelected] = b.useState(props.dateSelected);
  const [maxYear, setMaxYear] = b.useState(parseInt(props.yearSelected) + 11);
  const [minYear, setMinYear] = b.useState(parseInt(props.yearSelected) - 11);

  const [yearsArray, setYearsArray] = b.useState(
    [...Array(maxYear - minYear + 1).keys()].map((year: any) => {
      return minYear + year;
    })
  );

  //useEffect to scroll page to active year
  b.useEffect(() => {
    const activeYear = document.getElementsByClassName("active-year")[0];
    if (activeYear) {
      activeYear.scrollIntoView({
        block: "center",
        inline: "center",
      });
    }
  }, []);

  function setActiveYear(e: b.IBobrilMouseEvent) {
    if (
      e.target &&
      e.target.orig &&
      e.target.orig.attrs &&
      e.target.orig.attrs["data-year"]
    ) {
      props.setYearSelected(e.target.orig.attrs["data-year"]);
      props.setCurrentView("month");
    }
  }

  return (
    <div className="year-body" onClick={(e) => setActiveYear(e)}>
      {yearsArray.map((year: any) => {
        return (
          <div
            className={
              year == props.yearSelected
                ? "year-option active-year"
                : "year-option"
            }
            data-year={year}
          >
            {year}
          </div>
        );
      })}
    </div>
  );
};
