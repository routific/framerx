import * as React from "react"
import * as System from "../../src"
//use webpack to create dependancy free component
import { ControlType, addPropertyControls } from "framer"

export const ButtonFC = props => <System.ButtonFC {...props} />


ButtonFC.defaultProps = {
    width: 68,
    height: 32,
    label: "Button",
    type: "primary",
    size: "default",
    icon: "",
    disabled: false,
    ghost: false,
    circle: false,
    onClick: () => {},
}

addPropertyControls(ButtonFC, {
    label: { type: ControlType.String, title: "test" },
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
})
