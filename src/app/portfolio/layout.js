import styles from './portfolio.module.css'

export default function PortfolioLayout({ children }) {
	return (
		<section className={styles.portfolio}>
			{/* Include shared UI here e.g. a header or sidebar */}
			<nav></nav>

			{children}
		</section>
	)
}
