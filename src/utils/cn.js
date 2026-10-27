/**
 * cn - build a className string.
 *
 *  - clsx       : joins classes and supports conditions  cn("a", isOn && "b")
 *  - twMerge    : resolves Tailwind conflicts so the LAST class wins
 *                 cn("px-4", "px-6")  ->  "px-6"
 *
 * This is what lets components accept a `className` prop that can override defaults.
 */
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
