const TabButton = ({
	active,
	selectTab,
	children,
}: {
	active: boolean
	selectTab: () => void
	children: React.ReactNode | React.ReactNode[]
}) => {
	const buttonClasses = active
		? 'text-blue-50 border-b border-b-blue-500'
		: 'text-white/70'
	return (
		<>
			<button onClick={selectTab}>
				<p
					className={`mr-3 font-semibold hover:text-white/50 cursor-pointer ${buttonClasses}`}
				>
					{children}
				</p>
			</button>
		</>
	)
}
export default TabButton
