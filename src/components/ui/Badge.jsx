/**
 * Badge - small pill used for tags and status labels.
 *
 * Props:
 *   tone      "info" (blue, default) | "gift" (cream) | "success" (green)
 *   icon      optional element shown before the text
 *   className extra classes
 */
import { cn } from "../../utils/cn";

const TONES = {
  info: "bg-sky text-white",
  gift: "bg-cream text-primary",
  success: "bg-success-soft text-success",
};

export function Badge({ tone = "info", icon, children, className }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold",
        TONES[tone],
        className,
      )}
    >
      {icon}
      {children}
    </span>
  );
}
