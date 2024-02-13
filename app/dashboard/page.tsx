'use client'

import ProjectCard from '@/components/project/project-card'
import ProjectTag from '@/components/project/project-tag'
import { useState } from 'react'

type projectsData = {
	id: number
	title: string
	description: string
	image: string
	tag: string[]
	gitUrl: string
	previewUrl: string
}

const PROJECTS_DATA: projectsData[] = [
	{
		id: 1,
		title: 'Pokecards',
		description:
			'A web application built with Django, Python, and JavaScript. It allows users to build and manage their Pokémon trading card collections online.',
		image: '/projects/pokecards.png',
		tag: ['All', 'Personal'],
		gitUrl: 'https://github.com/Endeyr/pokecardsV2',
		previewUrl: 'https://pokecards.onrender.com/',
	},
	{
		id: 2,
		title: 'Spotify API',
		description:
			'This is a web application that allows users to search for Spotify artists and see their top songs, albums, and related artists. It uses the Spotify Web API to fetch the artist information and render it on the web page using Jinja2 templates, Flask, and Python.',
		image: '/projects/spotifyAPI.png',
		tag: ['All', 'Personal'],
		gitUrl:
			'https://github.com/Endeyr/cs50-final-project-music-discovery?tab=readme-ov-file',
		previewUrl: 'https://youtu.be/1iY3AhAjE50',
	},
	{
		id: 3,
		title: 'Breakout',
		description:
			'A classic Breakout game implemented in JavaScript. Breakout is a timeless arcade game where the player controls a paddle to bounce a ball, breaking bricks in the process.',
		image: '/projects/breakout.png',
		tag: ['All', 'Personal'],
		gitUrl: 'https://github.com/Endeyr/breakout-game',
		previewUrl: 'https://endeyr.itch.io/breakout',
	},
	{
		id: 4,
		title: "Apollo's Rescue",
		description:
			'A basic website platform tailored for small businesses to establish their online presence quickly and affordably. The platform offers essential features to showcase products, services, and contact information, helping small businesses attract customers and increase sales.',
		image: '/projects/nonprofit.jpg',
		tag: ['All', 'Personal'],
		gitUrl: 'https://github.com/Endeyr/small-business-webpage',
		previewUrl: 'https://non-profit-webpage.vercel.app/',
	},
]

const Dashboard = () => {
	const [tag, setTag] = useState('All')

	const handleTagChange = (newTag: string) => {
		setTag(newTag)
	}

	const filteredProjects = PROJECTS_DATA.filter((project) =>
		project.tag.includes(tag)
	)

	return (
		<main className="section-min-height">
			<h2 className="text-center text-4xl font-bold my-4">
				Projects Dashboard
			</h2>
			<div className="flex flex-row justify-center items-center gap-2 p-4">
				<ProjectTag
					name={'All'}
					onClick={() => {
						handleTagChange('All')
					}}
					isSelected={tag === 'All'}
				/>
				<ProjectTag
					name={'Personal'}
					onClick={() => {
						handleTagChange('Personal')
					}}
					isSelected={tag === 'Personal'}
				/>
				{/* <ProjectTag
					name={'Open Source'}
					onClick={() => {
						handleTagChange('Open Source')
					}}
					isSelected={tag === 'Open Source'}
				/> */}
			</div>
			<div className="grid sm:grid-cols-3 gap-8 sm:gap-12 mx-4 sm:mx-2">
				{filteredProjects.map((project) => (
					<ProjectCard
						key={project.id}
						title={project.title}
						description={project.description}
						imgUrl={project.image}
						gitUrl={project.gitUrl}
						previewUrl={project.previewUrl}
					/>
				))}
			</div>
		</main>
	)
}
export default Dashboard
