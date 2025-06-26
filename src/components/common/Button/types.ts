import { ButtonHTMLAttributes } from "react";

export interface ButtonProps {
  width?: number | string;
  size?: "small" | "medium";
  theme?: "primary" | "default";
}

export type Props = ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps;
