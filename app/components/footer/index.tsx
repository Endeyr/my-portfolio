import Link from 'next/link'

const Footer = () => {
	return (
		<>
			<div className="w-full h-20 bg-primary-500 sticky bottom-0">
				<div className="container mx-auto px-4 h-full">
					<div className="flex justify-center items-center h-full ">
						<ul className="hidden md:flex md:justify-evenly gap-x-6 text-white w-full">
							<li>
								<Link href="#">
									<p>Aaron Thompson</p>
								</Link>
							</li>
							<li>
								<Link href="#">
									<p>Github</p>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	)
}
export default Footer
