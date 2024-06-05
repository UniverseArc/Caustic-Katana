import { ReactNode } from 'react'

type TTypographyVariants = "hero" | "headline_1" | "headline_2" | "headline_3" | "headline_4" | "body" | "body_bold" | "body_large" | "body_large_bold" | "caption" | "caption_bold" | "caption_small" | "caption_small_bold" | "hairline" | "hairline_small" | "button" | "button_small";

type TTypographyTags = "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "li";

export interface ITypography {
  children: ReactNode,
  variant: TTypographyVariants,
  tag?: TTypographyTags,
  className?: string,
}

export const Types  = {
  hero: "h1",
  headline_1: "h2",
  headline_2: "h3",
  headline_3: "h4",
  headline_4: "h5",
  body: "p",
  body_bold: "p",
  body_large: "p",
  body_large_bold: "p",
  caption: "p",
  caption_small: "p",
  caption_bold: "p",
  caption_small_bold: "p",
  hairline: "p",
  hairline_small: "p",
  button: "span",
  button_small: "span"
}