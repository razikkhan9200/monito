/**
 * Checkbox - custom-styled checkbox with a label.
 *
 * How it works:
 *   1. The real <input type="checkbox"> stays in the DOM (keyboard + screen reader friendly)
 *      but its native look is removed with `appearance-none`.
 *   2. A tick icon is drawn on top. The `peer` / `peer-checked:` pair shows the tick
 *      only while the input is checked - no JavaScript state needed for the visuals.
 *
 * Props:
 *   label    text next to the box
 *   ...rest  forwarded to <input> (checked, onChange, defaultChecked ...)
 */
import { Check } from "lucide-react";

export function Checkbox({ label, ...rest }) {
  return (
    <label className="inline-flex cursor-pointer items-center gap-3 text-xs text-muted">
      <span className="relative flex h-4 w-4 items-center justify-center">
        <input
          type="checkbox"
          className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-[#b9c3c6] bg-white checked:border-primary checked:bg-primary"
          {...rest}
        />
        <Check
          size={12}
          strokeWidth={3}
          className="pointer-events-none absolute text-white opacity-0 peer-checked:opacity-100"
        />
      </span>
      {label}
    </label>
  );
}
