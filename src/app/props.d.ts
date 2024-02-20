import { IconType } from "react-icons"

export type InputType = "email" | "number" | "password" | "search" | "tel" | "text" | "url";

export interface ButtonProps {
	color: string
	handleClick?: () => void
	label: string
	className?: string
	disabled?: boolean
}

export interface InputProps {
	type: InputType
	name?: string
	id?: string
	color?: string
	placeholder?: string
	disabled?: boolean
	className?: string
	value?: string
	onChange?: (e: any) => void
}

export interface ActionProps {
	color: string
	className?: string
	handleClick?: () => void
	icon: IconType
}