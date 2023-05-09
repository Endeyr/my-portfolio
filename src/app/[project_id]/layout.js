import styles from './project.module.css'

export default function ProjectLayout({ children }) {
	return (
		<section className={styles.project}>
			{/* Include shared UI here e.g. a header or sidebar */}
			<nav></nav>

			{children}
		</section>
	)
}
