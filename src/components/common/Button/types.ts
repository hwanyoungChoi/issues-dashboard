import { ButtonHTMLAttributes, RefObject } from "react";

export interface ButtonProps {
  width?: number | string;
  size?: "small" | "medium";
  theme?: "primary" | "default";
  ref?: RefObject<HTMLButtonElement>;
}

export type Props = ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps;
