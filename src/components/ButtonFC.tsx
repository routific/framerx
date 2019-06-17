import * as React from "react";
import { Button } from "antd";

export interface Props {
  label: string
  type: "default" | "primary" | "danger" | "ghost" | "dashed"
  size: "default" | "small" | "large"
  icon: string
  disabled: boolean
  ghost: boolean
  circle: boolean
  onClick: React.MouseEventHandler
}

export const ButtonFC: React.FC<Props> = (props) => (
  <Button {...props}>{props.label}</Button>
)

ButtonFC.defaultProps = {
  label: "Label",
  type: "primary",
  size: "default",
  icon: "",
  disabled: false,
  ghost: false,
  circle: false,
  onClick: () => {}
};