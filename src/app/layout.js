import Footer from '../components/footer'
import './global.css'
import Nav from '../components/nav'
import styles from './page.module.css'

export const metadata = {
	title: "Aaron's Portfolio",
	description: "Aaron Thompson's web developer portfolio",
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={styles.page}>
				<Nav title={metadata.title} />
				<main className="main">{children}</main>
				<Footer />
			</body>
		</html>
	)
}
