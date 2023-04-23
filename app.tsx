import * as b from "bobril";
import { Input } from "./components/Input";
import { Datepicker } from "./components/Datepicker";

export const App = () => {
  const [open, setOpen] = b.useState(false);

  function onInputClick() {
    setOpen(true);
  }

  return (
    <>
      <Input placeholder={"Date"} type="text" onClick={onInputClick} />
      <Datepicker
        open={open}
        setOpen={setOpen}
        dateSelected={new Date().toISOString().split("T")[0]}
      />
    </>
  );
};
