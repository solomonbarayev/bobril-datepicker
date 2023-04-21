import * as b from "bobril";

export interface IMonthViewData {}

interface IMonthViewCtx extends b.IBobrilCtx {
  data: IMonthViewData;
}

export const MonthView = b.createVirtualComponent({
  id: "datepicker-monthview",
  render(ctx: IMonthViewCtx, me: b.IBobrilNode) {
    me.children = <div>Month view</div>;
  },
});
