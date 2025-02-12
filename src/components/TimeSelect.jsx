import { forwardRef } from "react";

import InputErrorMessage from "./InputErrorMessage";
import InputLabel from "./InputLabel";

const TimeSelect = forwardRef(({ errorMessage, ...rest }, ref) => {
  return (
    <div className="flex flex-col gap-1 text-left">
      <InputLabel htmlFor="time">Horário</InputLabel>
      <select
        id="time"
        className="rounded-lg border border-solid border-brand-border px-4 py-3 outline-brand-primary placeholder:text-sm placeholder:text-brand-text-gray"
        ref={ref}
        {...rest}
      >
        <option value="morning">Manhã</option>
        <option value="afternoon">Tarde</option>
        <option value="evening">Noite</option>
      </select>
      {errorMessage && <InputErrorMessage message={errorMessage} />}
    </div>
  );
});
TimeSelect.displayName = "TimeSelect";

export default TimeSelect;
