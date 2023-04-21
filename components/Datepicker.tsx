import * as b from "bobril";
import { BodyNav } from "./BodyNav";
import { DayView } from "./DayView";
import { MonthView } from "./MonthView";
import { YearView } from "./YearView";

export interface IDatepickerData {
  open: boolean;
  currentView: string;
  dateSelected: string;
}

interface IDatepickerCtx extends b.IBobrilCtx {
  data: IDatepickerData;
}

export const Datepicker = b.createVirtualComponent({
  id: "datepicker",
  init(ctx: IDatepickerCtx) {
    ctx.data.open = false;
    ctx.data.currentView = "day";
    ctx.data.dateSelected = `${new Date().getFullYear()}-${
      new Date().getMonth() + 1
    }-${new Date().getDate()}`;
  },
  render(ctx: IDatepickerCtx, me: b.IBobrilNode) {
    me.children = (
      <div className={`${ctx.data.open ? "datepicker open" : "datepicker"}`}>
        <div className="datepicker-container">
          <div className="datepicker-header">
            <button className="datepicker-year">
              {new Date().getFullYear()}
            </button>
            <div className="datepicker-date-text"></div>
          </div>
          <div className="datepicker-body">
            <BodyNav type="day" />
            <DayView dateSelected={ctx.data.dateSelected} />
            {/* {ctx.data.currentView == "month" && <MonthView />}
            {ctx.data.currentView == "year" && <YearView />} */}
          </div>
          <div className="datepicker-footer"></div>
        </div>
      </div>
    );
  },
  onClick(ctx: IDatepickerCtx, evt: b.IBobrilMouseEvent) {
    if (evt.target.className == "datepicker open") {
      ctx.data.open = false;
      b.invalidate(ctx);
    }
  },
});
