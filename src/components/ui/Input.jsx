/**
 * Input - labelled text field with helper / error text.
 *
 * Props:
 *   label    text above the field
 *   helper   small grey hint below the field
 *   error    small red message below the field (also turns the border red)
 *   success  show a green check icon inside the field
 *   type     any HTML input type; "password" gets a show/hide eye toggle automatically
 *   required adds " *" after the label and the native `required` attribute
 *   ...rest  forwarded to <input> (value, onChange, placeholder, defaultValue ...)
 */
import { useId, useState } from "react";
import { CheckCircle2, Eye, EyeOff } from "lucide-react";
import { cn } from "../../utils/cn";

export function Input({ label, helper, error, success, type = "text", className, required, ...rest }) {
  // useId gives a unique id so <label htmlFor> is linked to the right <input>
  const id = useId();
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";
  // When the eye is toggled on, a password field is rendered as plain text
  const inputType = isPassword && showPassword ? "text" : type;

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label htmlFor={id} className="text-xs font-semibold text-primary">
        {label}
        {required && " *"}
      </label>

      <div className="relative">
        <input
          id={id}
          type={inputType}
          required={required}
          aria-invalid={Boolean(error)}
          className={cn(
            "h-12 w-full rounded-lg border bg-white px-4 text-sm text-ink outline-none transition-colors placeholder:text-muted/70 focus:border-primary",
            error ? "border-error" : "border-[#cfd6d9]",
            // Leave room on the right for the icon
            (isPassword || success) && "pr-11",
          )}
          {...rest}
        />

        {/* Icon area, vertically centred on the right edge of the field */}
        <div className="absolute inset-y-0 right-3 flex items-center text-muted">
          {isPassword && (
            <button type="button" onClick={() => setShowPassword((v) => !v)} aria-label="Toggle password visibility">
              {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
            </button>
          )}
          {success && <CheckCircle2 size={18} />}
        </div>
      </div>

      {/* An error message takes priority over the helper text */}
      {(error || helper) && <p className={cn("text-[11px]", error ? "text-error" : "text-muted")}>{error ?? helper}</p>}
    </div>
  );
}
