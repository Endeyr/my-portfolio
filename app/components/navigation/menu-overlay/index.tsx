import NavLink from '../navbar/navlink'

const MenuOverlay = ({
	links,
	toggle,
}: {
	links: { title: string; path: string }[]
	toggle: () => void
}) => {
	return (
		<ul className="flex flex-col p-4 items-center bg-primary-500 divide-y divide-solid divide-white border border-t-white/50">
			{links.map((link, index) => (
				<li key={index}>
					<button onClick={toggle}>
						<NavLink href={link.path} title={link.title} />
					</button>
				</li>
			))}
		</ul>
	)
}
export default MenuOverlay
