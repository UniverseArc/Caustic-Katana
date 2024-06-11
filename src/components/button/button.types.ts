import { ButtonHTMLAttributes } from "react";

export type TButtonVariants = "neutral" | "light";

export type TButtonSizes = "small" | "medium";

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: TButtonVariants;
  text: string;
  disabled?: boolean;
  className?: string;
  size?: TButtonSizes;
}
