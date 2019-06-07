import * as React from "react"
import { Button } from "antd"

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

export class AntButton extends React.Component<Props> {

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
