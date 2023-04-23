import * as b from "bobril";

interface InputProps {
  placeholder: string;
  type: string;
  onClick: () => void;
}

export const Input = (props: InputProps) => {
  return (
    <input
      placeholder={props.placeholder}
      type={props.type}
      onClick={props.onClick}
    />
  );
};

// export interface IInputData {
//   placeholder: string;
//   type: string;
//   onClick: () => void;
// }

// interface IInputCtx extends b.IBobrilCtx {
//   data: IInputData;
// }

// export const Input = b.createVirtualComponent({
//   id: "input",
//   render(ctx: IInputCtx, me: b.IBobrilNode) {
//     me.children = (
//       <>
//         <input placeholder={ctx.data.placeholder} type={ctx.data.type}
//         onClick={this.onClick}/>
//       </>
//     );
//   },
// });
