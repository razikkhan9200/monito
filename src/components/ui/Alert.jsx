/**
 * Alert - inline message box for information, success or error feedback.
 *
 * Props:
 *   tone "info" (default) | "success" | "error"
 *
 * `role="alert"` makes screen readers announce the message when it appears.
 */
import { AlertCircle, CheckCircle2, Info } from "lucide-react";
import { cn } from "../../utils/cn";

// Colours + icon for each tone
const TONES = {
  info: { box: "bg-cream text-primary", Icon: Info },
  success: { box: "bg-success-soft text-success", Icon: CheckCircle2 },
  error: { box: "bg-error-soft text-error", Icon: AlertCircle },
};

export function Alert({ tone = "info", children }) {
  const { box, Icon } = TONES[tone];

  return (
    <div role="alert" className={cn("flex items-center gap-3 rounded-lg px-4 py-4 text-xs font-medium", box)}>
      <Icon size={18} className="shrink-0" />
      <p>{children}</p>
    </div>
  );
}
