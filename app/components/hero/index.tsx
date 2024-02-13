import HeroButton from '@/components/hero/button'
import profilePicture from '@/public/pfp.jpg'
import Image from 'next/image'

const Hero = () => {
	return (
		<section>
			<div className="grid grid-cols-1 sm:grid-cols-12">
				<div className="col-span-7 place-self-center text-center sm:text-left">
					<h1 className="mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold break-words">
						Hello, I&apos;m Aaron
					</h1>
					<p className="dark:text-[#ADB7BE] text-lg mb-4 sm:text-xl lg:text-2xl break-words">
						Innovative web and systems developer eager to translate 2 years of
						building interactive apps into flexible, responsive web experiences.
						Skilled in HTML5, CSS3, JS, Typescript, React & Next.js. Thrives in
						collaborative teams, committed to improvement, and seeks growth in a
						dynamic company.
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
