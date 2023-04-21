import * as b from "bobril";
import { Input } from "./components/Input";
import { Datepicker } from "./components/Datepicker";

interface IAppData {
  open: boolean;
}

interface IAppCtx extends b.IBobrilCtx {
  data: IAppData;
}

export const App = b.createVirtualComponent({
  id: "app",
  render(ctx: IAppCtx, me: b.IBobrilNode) {
    me.children = (
      <>
        <h1>Datepicker</h1>
        <Input placeholder={"Date"} type="text" onClick={() => onClick(ctx)} />
        <Datepicker open={ctx.data.open} />
      </>
    );
  },
});

function onClick(ctx: b.IBobrilCtx) {
  ctx.data.open = true;
  b.invalidate(ctx);
}
