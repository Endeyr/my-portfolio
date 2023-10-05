import Link from 'next/link'

export default function Home() {
	return (
		<main className="flex section-min-height flex-col items-center p-24">
			<h1>Hello, Home page!</h1>
			<ul>
				<li>
					<Link href="/project/1">Project 1</Link>
				</li>
				<li>
					<Link href="/project/2">Project 2</Link>
				</li>
				<li>
					<Link href="/project/3">Project 3</Link>
				</li>
				<li>
					<Link href="/project/4">Project 4</Link>
				</li>
			</ul>
		</main>
	)
}
