import Link from 'next/link'

const Navbar = () => {
	return (
		<>
			<div className="w-full h-20 bg-secondary-500 sticky top-0">
				<div className="container mx-auto px-4 h-full">
					<div className="flex justify-between gap-4 items-center h-full">
						<Link href="/">
							<p>Home</p>
						</Link>
						<ul className="hidden md:flex gap-x-6 text-white">
							<li></li>
							<li>
								<Link href="/dashboard">
									<p>Dashboard</p>
								</Link>
							</li>
							<li>
								<Link href="/contact">
									<p>Contact</p>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	)
}

export default Navbar
