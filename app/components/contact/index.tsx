'use client'
import emailjs from '@emailjs/browser'
import { useEffect, useRef, useState } from 'react'

export default function Contact() {
	const [fullname, setFullname] = useState('')
	const [email, setEmail] = useState('')
	const [subject, setSubject] = useState('')
	const [message, setMessage] = useState('')
	const [loading, setLoading] = useState(false)

	useEffect(() => emailjs.init('MJ37X-bMiUefSGN2a'), [])

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const serviceId = 'service_96cwyu5'
		const templateId = 'template_stnhmje'
		try {
			setLoading(true)
			await emailjs.send(serviceId, templateId, {
				name: fullname,
				recipient: email,
			})
			alert('email successfully sent check inbox')
		} catch (error) {
			console.log(error)
		} finally {
			setLoading(false)
			setFullname('')
			setEmail('')
			setSubject('')
			setMessage('')
		}
	}

	return (
		<section id="contact">
			<form onSubmit={handleSubmit} className="flex flex-col">
				<h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold break-words text-center">
					Contact Me
				</h2>
				<label
					htmlFor="fullname"
					className="dark:text-[#ADB7BE] text-base mt-4 sm:text-lg lg:text-xl"
				>
					Full Name:
				</label>
				<input
					type="text"
					name="fullname"
					className="dark:text-black rounded-lg"
					value={fullname}
					onChange={(e) => {
						setFullname(e.target.value)
					}}
					required
				/>
				<label
					htmlFor="email"
					className="dark:text-[#ADB7BE] text-base mt-4 sm:text-lg lg:text-xl"
				>
					Email:
				</label>
				<input
					type="email"
					name="email"
					className="dark:text-black rounded-lg"
					value={email}
					onChange={(e) => {
						setEmail(e.target.value)
					}}
					required
				/>
				<label
					htmlFor="subject"
					className="dark:text-[#ADB7BE] text-base mt-4 sm:text-lg lg:text-xl"
				>
					Subject:
				</label>
				<input
					type="text"
					name="subject"
					className="dark:text-black rounded-lg"
					value={subject}
					onChange={(e) => {
						setSubject(e.target.value)
					}}
					required
				/>
				<label
					htmlFor="message"
					className="dark:text-[#ADB7BE] text-base mt-4 sm:text-lg lg:text-xl"
				>
					Message:
				</label>
				<textarea
					name="message"
					className="dark:text-black rounded-lg h-20"
					value={message}
					onChange={(e) => {
						setMessage(e.target.value)
					}}
					required
				></textarea>
				<div className="flex flex-row items-center justify-end mt-4">
					<button
						disabled={loading}
						className="px-6 py-4 mt-4 w-full sm:w-fit rounded-full bg-transparent border-2 border-black hover:bg-secondary-300 active:bg-secondary-800 dark:hover:bg-secondary-300 dark:hover:text-black dark:active:bg-secondary-800 dark:active:text-black dark:text-white  dark:border-white"
					>
						Send
					</button>
				</div>
			</form>
		</section>
	)
}
