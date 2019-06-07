import * as React from "react"
import { PropertyControls, ControlType } from "framer"
import { Button } from "antd"

interface Props {
    label: string
    type: "default" | "primary" | "danger" | "ghost" | "dashed"
    size: "default" | "small" | "large"
    icon: string
    disabled: boolean
    ghost: boolean
    circle: boolean
    onClick: React.MouseEventHandler
}

export class AntButton extends React.Component<Props> {
    // Set default properties
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

    // Items shown in property panel
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

    render() {
        const { label, type, size, icon, disabled, ghost, circle, onClick } = {
            ...this.props,
        }
        const labeledButton = (
            <Button
                type={type}
                size={size}
                icon={icon}
                disabled={disabled}
                ghost={ghost}
                onClick={onClick}
                block={true}
            >
                {label}
            </Button>
        )
        const circledButton = (
            <Button
                type={type}
                size={size}
                icon={icon}
                disabled={disabled}
                ghost={ghost}
                onClick={onClick}
                shape="circle"
            />
        )

        return circle ? circledButton : labeledButton
    }
}
