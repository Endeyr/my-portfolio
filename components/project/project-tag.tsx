const ProjectTag = ({
	name,
	onClick,
	isSelected,
}: {
	name: string
	onClick: () => void
	isSelected: boolean
}) => {
	const buttonClasses = isSelected ? 'bg-primary-500' : 'bg-transparent'

	return (
		<button
			className={`px-6 py-4 mt-4 w-full text-base sm:text-lg sm:w-fit rounded-full border-2 border-black hover:bg-secondary-300 active:bg-secondary-800 dark:hover:bg-secondary-300 dark:hover:text-black dark:active:bg-secondary-800 dark:active:text-black dark:text-white  dark:border-white ${buttonClasses}`}
			onClick={onClick}
		>
			{name}
		</button>
	)
}
export default ProjectTag
