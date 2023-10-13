import Hero from './components/hero'

export default function Home() {
	return (
		<main className="flex section-min-height flex-col bg-slate-50 dark:bg-slate-950">
			<div className="container mx-auto px-12 py-4 my-4">
				<Hero />
			</div>
			<div className="container mx-auto px-12 py-4 my-4"></div>
		</main>
	)
}
