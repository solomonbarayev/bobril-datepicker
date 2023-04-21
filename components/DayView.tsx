import * as b from "bobril";
import * as constants from "../constants";

export interface IDayViewData {
  firstDay: number;
  daysInMonth: number;
  dateSelected: string;
  nonDateItems: 
}

interface IDayViewCtx extends b.IBobrilCtx {
  data: IDayViewData;
}

export const DayView = b.createVirtualComponent({
  id: "datepicker-dayview",
  init(ctx: IDayViewCtx) {
    ctx.data.firstDay = new Date(ctx.data.dateSelected).getDay();
    ctx.data.daysInMonth = new Date(
      new Date(ctx.data.dateSelected).getFullYear(),
      new Date(ctx.data.dateSelected).getMonth() + 1,
      0
    ).getDate();

  },
  render(ctx: IDayViewCtx, me: b.IBobrilNode) {
    me.children = (
      <div>
        <div className="datepicker-days">
          {constants.daysShort.map((day: any) => {
            return <div className="datepicker-day">{day}</div>;
          })}
        </div>

        <div className="datepicker-calendar">
          {Array.from(Array(ctx.data.firstDay).keys()).map((day: any) => {
            return <div className="datepicker-day"></div>;
          })}
        </div>
      </div>
    );
  },
});
