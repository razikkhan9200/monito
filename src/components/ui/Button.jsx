/**
 * Button - the one button used across the whole site.
 *
 * Props:
 *   variant   "primary" (filled) | "outline" | "link" (text only)
 *   size      "md" (48px tall, default) | "sm" (36px tall)
 *   icon      optional element shown AFTER the label, e.g. <ChevronRight />
 *   fullWidth stretch to 100% of the parent
 *   className extra classes; they win over the defaults (thanks to `cn`)
 *   ...rest   anything else (onClick, disabled, type ...) goes straight to <button>
 */
import { cn } from "../../utils/cn";

// Look of each variant
const VARIANTS = {
  primary: "border border-primary bg-primary text-white hover:bg-navy",
  outline: "border border-primary bg-transparent text-primary hover:bg-primary hover:text-white",
  link: "border border-transparent px-2 text-primary hover:underline",
};

// Height / padding / font size of each size
const SIZES = {
  md: "h-12 px-6 text-sm",
  sm: "h-9 px-4 text-xs",
};

export function Button({
  variant = "primary",
  size = "md",
  icon,
  fullWidth = false,
  className,
  children,
  disabled,
  ...rest
}) {
  return (
    <button
      disabled={disabled}
      className={cn(
        // Base styles shared by every button (pill shape, centred content)
        "inline-flex items-center justify-center gap-2 rounded-full font-semibold whitespace-nowrap transition-colors",
        VARIANTS[variant],
        SIZES[size],
        fullWidth && "w-full",
        // Disabled look overrides the variant colours; hover styles are neutralised too
        disabled && "cursor-not-allowed border-transparent bg-[#d0d6d8] text-muted hover:bg-[#d0d6d8] hover:text-muted",
        className,
      )}
      {...rest}
    >
      {children}
      {icon}
    </button>
  );
}
