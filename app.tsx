import * as b from "bobril";
import { Input } from "./components/Input";
import { Datepicker } from "./components/Datepicker";

export const App = () => {
  const [open, setOpen] = b.useState(false);
  const [dateSelected, setDateSelected] = b.useState(
    new Date().toISOString().split("T")[0]
  );

  function onInputClick() {
    setOpen(true);
  }

  return (
    <>
      <Input
        placeholder={"Date"}
        type="text"
        onClick={onInputClick}
        dateSelected={dateSelected}
      />
      <Datepicker
        open={open}
        setOpen={setOpen}
        dateSelected={dateSelected}
        setDateSelected={setDateSelected}
      />
    </>
  );
};
