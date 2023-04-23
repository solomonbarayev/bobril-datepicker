import * as b from "bobril";

interface InputProps {
  placeholder: string;
  type: string;
  dateSelected: string;
  onClick: () => void;
}

export const Input = (props: InputProps) => {
  return (
    <input
      placeholder={props.placeholder}
      type={props.type}
      onClick={props.onClick}
      id="datepicker-input"
      value={`${props.dateSelected.split("-")[2]}/${
        props.dateSelected.split("-")[1]
      }/${props.dateSelected.split("-")[0]}`}
    />
  );
};
