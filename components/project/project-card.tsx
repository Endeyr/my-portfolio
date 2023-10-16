import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

const ProjectCard = ({
	imgUrl,
	title,
	description,
	gitUrl,
	previewUrl,
}: {
	imgUrl: string
	title: string
	description: string
	gitUrl: string
	previewUrl: string
}) => {
	return (
		<div>
			<div
				className="h-52 md:h-72 rounded-t-xl relative group"
				style={{ background: `url(${imgUrl})`, backgroundSize: 'cover' }}
			>
				<div className="overlay hidden items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
					<Link
						href={gitUrl}
						className="h-14 w-14 mr-4 border-2 relative rounded-full group/link dark:border-[#ADB7BE] dark:hover:border-white"
					>
						<CodeBracketIcon className="h-10 w-10 absolute top-1/2 left-1/2 -transform -translate-x-1/2 -translate-y-1/2 dark:text-[#ADB7BE] cursor-pointer group-hover/link:dark:text-white" />
					</Link>
					<Link
						href={previewUrl}
						className="h-14 w-14 border-2 relative rounded-full group/link dark:border-[#ADB7BE] dark:hover:border-white"
					>
						<EyeIcon className="h-10 w-10 absolute top-1/2 left-1/2 -transform -translate-x-1/2 -translate-y-1/2 dark:text-[#ADB7BE] cursor-pointer group-hover/link:dark:text-white" />
					</Link>
				</div>
			</div>
			<div className="rounded-b-xl mt-4 bg-slate-300 dark:bg-[#181818] p-4">
				<h5 className="text-xl font-semibold mb-2">{title}</h5>
				<p className="dark:text-[#ADB7BE] text-slate-100">{description}</p>
			</div>
		</div>
	)
}
export default ProjectCard
