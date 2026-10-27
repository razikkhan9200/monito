/**
 * Select - labelled dropdown that matches <Input /> visually.
 *
 * Props:
 *   label       text above the field
 *   placeholder first (disabled) option shown until the user picks something
 *   options     array of strings
 *   required    adds " *" and the native `required` attribute
 *   ...rest     forwarded to <select> (onChange, value ...)
 */
import { useId } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "../../utils/cn";

export function Select({ label, placeholder, options, className, required, ...rest }) {
  const id = useId();

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label htmlFor={id} className="text-xs font-semibold text-primary">
        {label}
        {required && " *"}
      </label>

      <div className="relative">
        {/*
          `appearance-none` hides the browser's own arrow so we can draw ours.
          `invalid:text-muted` greys the text while the placeholder (value "") is selected.
        */}
        <select
          id={id}
          defaultValue=""
          required={required}
          className="h-12 w-full appearance-none rounded-lg border border-[#cfd6d9] bg-white px-4 pr-10 text-sm text-ink outline-none invalid:text-muted focus:border-primary"
          {...rest}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>

        {/* pointer-events-none so clicks on the arrow still open the dropdown */}
        <ChevronDown size={18} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted" />
      </div>
    </div>
  );
}
