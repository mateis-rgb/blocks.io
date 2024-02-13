import { IconType } from "react-icons"

export interface ButtonProps {
	color: string
	handleClick?: () => void
	label: string
	className?: string
}

export interface ActionProps {
	color: string
	className?: string
	handleClick?: () => void
	icon: IconType
}