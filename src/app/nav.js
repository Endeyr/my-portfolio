import styles from './nav.module.css'

export default function Nav({ title }) {
	return (
		<nav>
			<h1>{title}</h1>
			<ul className={styles.nav}>
				<li>Home</li>
				<li>Portfolio</li>
				<li>
					<button className="btn">Light mode</button>
				</li>
			</ul>
		</nav>
	)
}
