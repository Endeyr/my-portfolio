import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from './components/footer'
import Navigation from './components/navigation'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Aaron Thompson - Portfolio',
	description: 'My professional portfolio for web development.',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Navigation />
				{children}
				<Footer />
			</body>
		</html>
	)
}
