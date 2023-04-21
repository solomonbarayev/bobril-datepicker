import * as b from "bobril";

export interface IYearViewData {}

interface IYearViewCtx extends b.IBobrilCtx {
  data: IYearViewData;
}

export const YearView = b.createVirtualComponent({
  id: "datepicker-yearview",
  render(ctx: IYearViewCtx, me: b.IBobrilNode) {
    me.children = <div>Year view</div>;
  },
});
