import Link from 'next/link'

const NavLink = ({ href, title }: { href: string; title: string }) => {
	return (
		<>
			<Link href={href}>
				<p className="text-2xl text-white/80 hover:text-white/50 active:text-white/100 font-semibold">
					{title}
				</p>
			</Link>
		</>
	)
}
export default NavLink
