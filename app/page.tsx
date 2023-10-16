import About from './components/about'
import Contact from './components/contact'
import Hero from './components/hero'

export default function Home() {
	return (
		<main className="flex flex-col bg-slate-50 dark:bg-slate-950">
			<div className="container section-min-height mx-auto px-12 py-4 my-12">
				<Hero />
			</div>
			<div className="container section-min-height mx-auto px-12 py-4 my-8">
				<About />
			</div>
			<div className="container section-min-height mx-auto px-12 py-4 my-4">
				<Contact />
			</div>
		</main>
	)
}
