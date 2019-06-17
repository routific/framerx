import * as React from "react"
import * as System from "../../src"
import { ControlType, addPropertyControls } from "framer"

export const Navigation = props => <System.Navigation {...props} />

addPropertyControls(Navigation, {
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
