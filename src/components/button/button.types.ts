import { ButtonHTMLAttributes } from "react";

export type TButtonVariants = "neutral" | "light";

export type TButtonSizes = "small" | "medium";

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode,
  variant: TButtonVariants;
  className?: string;
  size?: TButtonSizes;
  tag?: React.ReactNode;
}
