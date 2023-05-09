import './global.css'
import styles from './page.module.css'

export const metadata = {
	title: "Aaron's Portfolio",
	description: "Aaron Thompson's web developer portfolio",
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={styles.page}>{children}</body>
		</html>
	)
}
