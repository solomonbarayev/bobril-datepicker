import * as b from "bobril";

export interface IInputData {
  placeholder: string;
  type: string;
  onClick?: () => void;
}

interface IInputCtx extends b.IBobrilCtx {
  data: IInputData;
}

export const Input = b.createVirtualComponent({
  id: "input",
  init(ctx: IInputCtx) {
    console.log(ctx.data.placeholder);
  },
  render(ctx: IInputCtx, me: b.IBobrilNode) {
    me.children = (
      <>
        <input
          placeholder={ctx.data.placeholder}
          type={ctx.data.type}
          onClick={ctx.data.onClick}
        />
      </>
    );
  },
});
