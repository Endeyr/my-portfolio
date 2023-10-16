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
		description: 'Project 1 description',
		image: '/projects/pokecards.png',
		tag: ['All', 'Personal'],
		gitUrl: '/',
		previewUrl: '/',
	},
	{
		id: 2,
		title: 'Spotify API',
		description: 'Project 2 description',
		image: '/projects/spotifyAPI.png',
		tag: ['All', 'Personal'],
		gitUrl: '/',
		previewUrl: '/',
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
				<ProjectTag
					name={'Open Source'}
					onClick={() => {
						handleTagChange('Open Source')
					}}
					isSelected={tag === 'Open Source'}
				/>
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
