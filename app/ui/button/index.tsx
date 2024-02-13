import { ButtonHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

type PrimaryColors = {
	bg?: string
	hoverBg?: string
	focusRing?: string
}
type SecondaryColors = {
	text?: string
	hoverBorder?: string
	hoverBg?: string
	focusRing?: string
}
type TertiaryColors = {
	text?: string
	hoverText?: string
	focusRing?: string
}

type BaseButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

// Overload signatures for button component
type ButtonComponent = {
	(
		props: BaseButtonProps & {
			variant?: 'primary'
			colors?: PrimaryColors
			className: string
		}
	): JSX.Element
	(
		props: BaseButtonProps & {
			variant: 'secondary'
			colors?: SecondaryColors
			className: string
		}
	): JSX.Element
	(
		props: BaseButtonProps & {
			variant: 'tertiary'
			colors?: TertiaryColors
			className?: string
		}
	): JSX.Element
}

const Button: ButtonComponent = ({
	variant = 'primary',
	colors = {},
	className = '',
	...props
}) => {
	// Base Classes
	const baseClasses: string =
		'inline-flex items-center justify-center gap-2 rounded-md px-4 text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset disabled:pointer-events-none disabled:opacity-50'
	// colorProps is type any bc type is checked at ButtonComponent
	const generateVariantClasses = (variant: string, colorProps: any) => {
		switch (variant) {
			case 'primary':
				return `border border-transparent py-3 text-white 
        ${colorProps.bg || 'bg-[#4078c8]'} 
        ${colorProps.hoverBg || 'hover:bg-[#3766a9]'}  
        ${colorProps.focusRing || 'focus:ring-[#4078c8]'}`
			case 'secondary':
				return `border-2 border-gray-200 py-[0.688rem] hover:text-white 
        ${colorProps.text || 'text-[#4078c8]'} 
        ${colorProps.hoverBorder || 'hover:border-[#4078c8]'} 
        ${colorProps.hoverBg || 'hover:bg-[#4078c8]'} 
        ${colorProps.focusRing || 'focus:ring-[#4078c8]'}`
			case 'tertiary':
				return `border border-transparent py-3 underline-offset-4 ring-offset-white hover:underline 
        ${colorProps.text || 'text-[#4078c8]'} 
        ${colorProps.hoverText || 'hover:text-[#203c64]'} 
        ${colorProps.focusRing || 'focus:ring-[#4078c8]'}`
			default:
				return ''
		}
	}
	// Generate variant classes based on the extracted color props
	const variantClasses = generateVariantClasses(variant, colors)

	// npm i tailwind-merge
	// Merge the base classes with the variant classes and any additional classes
	const mergedClasses = twMerge([baseClasses, variantClasses, className])

	return <button className={mergedClasses} {...props} />
}
export default Button
