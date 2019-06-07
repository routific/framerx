import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls } from "framer"

type Props = System.AntButtonProps & {
    width: number
    height: number
    label: string
    type: "default" | "primary" | "danger" | "ghost" | "dashed"
    size: "default" | "small" | "large"
    icon: string
    disabled: boolean
    ghost: boolean
    circle: boolean
    onClick: React.MouseEventHandler
}

export class Button extends React.Component<Props> {
  render() {
    return <System.AntButton {...this.props} />
  }

  static defaultProps = {
    width: 68,
    height: 32,
    label: "Label",
    type: "default",
    size: "default",
    icon: "",
    disabled: false,
    ghost: false,
    circle: false,
    onClick: () => {},
}

static propertyControls: PropertyControls = {
    label: { type: ControlType.String, title: "Label" },
    icon: { type: ControlType.String, title: "Icon" },
    type: {
        type: ControlType.Enum,
        options: ["default", "primary", "danger", "ghost", "dashed"],
        title: "Type",
    },
    size: {
        type: ControlType.SegmentedEnum,
        options: ["default", "small", "large"],
        title: "Size",
    },
    circle: { type: ControlType.Boolean, title: "Circle" },
    disabled: { type: ControlType.Boolean, title: "Disabled" },
    ghost: { type: ControlType.Boolean, title: "Ghost" },
}
}
