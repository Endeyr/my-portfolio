import { twMerge } from 'tailwind-merge'

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
	label?: string
	description?: string
}

const Input: React.FC<InputProps> = ({
	label,
	description,
	className,
	...props
}) => {
	const baseClasses: string =
		'block w-full rounded-md border-gray-200 px-4 py-4 text-sm focus:border-[#4078c8] focus:ring-[#4078c8] disabled:pointer-events-none disabled:opacity-50'

	const mergedClasses: string = twMerge([baseClasses, className])
	// requires npm i -D @tailwindcss/forms
	// add formsPlugin import to tailwind.config.js
	return (
		<div className="max-w-sm space-y-3">
			{label && (
				<label className="mb-2 block text-sm font-medium">{label}</label>
			)}
			<input {...props} className={mergedClasses} />
			{description && (
				<p className="mt-2 text-sm text-gray-500">{description}</p>
			)}
		</div>
	)
}
export default Input
