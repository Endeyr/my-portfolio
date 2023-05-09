import styles from './contact.module.css'

export default function ContactLayout({ children }) {
	return (
		<section className={styles.contact}>
			{/* Include shared UI here e.g. a header or sidebar */}
			<nav></nav>

			{children}
		</section>
	)
}
