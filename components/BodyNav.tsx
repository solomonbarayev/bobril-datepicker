import * as b from "bobril";

export interface IBodyNavData {
  type: string;
}

interface IBodyNavCtx extends b.IBobrilCtx {
  data: IBodyNavData;
}

export const BodyNav = b.createVirtualComponent({
  id: "body-nav",
  render(ctx: IBodyNavCtx, me: b.IBobrilNode) {
    me.children = (
      <div className="datepicker-body-header">
        <button className="datepicker-previous">&lt;</button>
        <div className="datepicker-header-text">
          {(ctx.data.type = "day" ? "april 2022" : "2022")}
        </div>
        <button className="datepicker-next">&gt;</button>
      </div>
    );
  },
});
