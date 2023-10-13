import HeroButton from '@/components/hero/button'
import Image from 'next/image'
import profilePicture from '../../../public/pfp.jpg'

const Hero = () => {
	return (
		<section>
			<div className="grid grid-cols-1 sm:grid-cols-12">
				<div className="col-span-7 place-self-center text-center sm:text-left">
					<h1 className="mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold break-words">
						Hello, I&apos;m Aaron
					</h1>
					<p className="dark:text-[#ADB7BE] text-lg mb-4 sm:text-xl lg:text-2xl break-words">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi
						possimus recusandae deleniti cum nobis temporibus? Corporis
						obcaecati eum at assumenda, et ipsam nostrum reiciendis. Atque
						tenetur autem nobis numquam similique!
					</p>
					<div>
						<HeroButton />
					</div>
				</div>
				<div className="col-span-5 place-self-center mt-4 sm:mt-0">
					<div className="w-[180px] h-[250px] lg:w-[280px] lg:h-[380px]  relative">
						<Image
							src={profilePicture}
							alt="profile picture"
							className=" rounded-3xl"
							fill
						/>
					</div>
				</div>
			</div>
		</section>
	)
}
export default Hero
