'use client'

import TabButton from '@/components/about/button'
import Image from 'next/image'
import { useState, useTransition } from 'react'
import aboutPicture from '../../../public/about.png'

type TabData = {
	title: string
	id: string
	content: JSX.Element
}

const TAB_DATA: TabData[] = [
	{
		title: 'Skills',
		id: 'Skills',
		content: (
			<ul className="list-disc pl-2">
				<li>Node.js</li>
				<li>React</li>
				<li>Javascript</li>
				<li>Typescript</li>
				<li>Python</li>
				<li>Django</li>
				<li>Next.js</li>
			</ul>
		),
	},
	{
		title: 'Education',
		id: 'Education',
		content: (
			<ul className="list-disc pl-2">
				<li>Xavier University</li>
				<li>Harvard&apos;s CS50: Intro to Programming</li>
				<li>Harvard&apos;s CS50: Web Development</li>
			</ul>
		),
	},
	{
		title: 'Experience',
		id: 'Experience',
		content: (
			<ul className="list-disc pl-2">
				<li className="cursor-pointer">Pokecards</li>
				<li className="cursor-pointer">Spotify API</li>
				<li className="cursor-pointer">Breakout</li>
				<li className="cursor-pointer">Non-Profit Website</li>
			</ul>
		),
	},
	// {
	// 	title: 'Contributions',
	// 	id: 'Contributions',
	// 	content: (
	// 		<ul className="list-disc pl-2">
	// 			<li className="cursor-pointer">Project X</li>
	// 			<li className="cursor-pointer">Project Y</li>
	// 			<li className="cursor-pointer">Project Z</li>
	// 			<li className="cursor-pointer">Project G</li>
	// 		</ul>
	// 	),
	// },
]
const About = () => {
	const [tab, setTab] = useState<string>('Skills')

	const handleTabChange = (id: string) => {
		setTab(id)
	}

	return (
		<section className="dark:text-white" id="about">
			<div className="grid grid-cols-1 md:grid-cols-2 place-self-center  sm:p-4 items-center">
				<div className="hidden sm:block md:w-[250px] md:h-[250px] lg:w-[350px] lg:h-[350px] mx-auto lg:mt-16 relative">
					<Image src={aboutPicture} alt="computer" fill />
				</div>
				<div className="mt-4 md:mt-0 text-left">
					<h2 className="mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold break-words text-center">
						About Me
					</h2>
					<p className="dark:text-[#ADB7BE] text-base mb-4 sm:text-lg lg:text-xl break-words">
						I&apos;m passionate about crafting user-friendly and visually appealing websites. 
					</p>
					<div className="flex flex-row justify-start mt-8 ">
						<TabButton
							active={tab === 'Skills'}
							selectTab={() => handleTabChange('Skills')}
						>
							{' '}
							Skills{' '}
						</TabButton>
						<TabButton
							active={tab === 'Education'}
							selectTab={() => handleTabChange('Education')}
						>
							{' '}
							Education{' '}
						</TabButton>
						<TabButton
							active={tab === 'Experience'}
							selectTab={() => handleTabChange('Experience')}
						>
							{' '}
							Experience{' '}
						</TabButton>
						{/* <TabButton
							active={tab === 'Contributions'}
							selectTab={() => handleTabChange('Contributions')}
						>
							{' '}
							Contributions{' '}
						</TabButton> */}
					</div>
					<div className="mt-8 h-[100px]">
						{TAB_DATA.find((t) => t.id === tab)?.content ?? (
							<div>Add Content</div>
						)}
					</div>
				</div>
			</div>
		</section>
	)
}
export default About
