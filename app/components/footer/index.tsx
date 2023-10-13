import Link from 'next/link'

const Footer = () => {
	return (
		<>
			<div className="w-full h-20 bg-primary-500 sticky bottom-0 z-10">
				<div className="container mx-auto px-4 h-full">
					<div className="flex justify-center items-center h-full ">
						<ul className="flex justify-evenly gap-x-6 text-white w-full">
							<li>
								<Link href="#">
									<p className="text-xl text-white hover:text-white/50 active:text-white/100 font-semibold">
										Aaron Thompson
									</p>
								</Link>
							</li>
							<li className="hidden sm:block">
								<Link href="#">
									<p className="text-xl text-white hover:text-white/50 active:text-white/100 font-semibold">
										Github
									</p>
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
