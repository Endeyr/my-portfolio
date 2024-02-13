'use client'

import Link from 'next/link'

const HeroButton = () => {
	return (
		<>
			<Link href={'/#contact'}>
				<button className="px-6 py-4 w-full sm:w-fit mr-4 rounded-full bg-primary-500 border-2 dark:border-white border-black hover:bg-secondary-300 active:bg-secondary-800 dark:hover:bg-secondary-300 dark:active:bg-secondary-800 dark:bg-white dark:text-black">
					Hire Me
				</button>
			</Link>
			<Link
				href={`resume/AaronThompsonResume.pdf`}
				target="_blank"
				rel="noopener noreferrer"
				locale={false}
				download="AaronThompsonResume.pdf"
			>
				<button className="px-6 py-4 mt-4 w-full sm:w-fit rounded-full bg-transparent border-2 border-black hover:bg-secondary-300 active:bg-secondary-800 dark:hover:bg-secondary-300 dark:hover:text-black dark:active:bg-secondary-800 dark:active:text-black dark:text-white  dark:border-white">
					Download CV
				</button>
			</Link>
		</>
	)
}
export default HeroButton
