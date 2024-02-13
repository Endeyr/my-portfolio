'use client'
import { useState } from 'react'
import Button from '../button'
import Input from '../input'

type ErrorMessage = {
	firstName: string
	lastName: string
	phone: string
	email: string
	message: string
}
const Form = () => {
	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [phone, setPhone] = useState('')
	const [email, setEmail] = useState('')
	const [message, setMessage] = useState('')
	const [errors, setErrors] = useState<ErrorMessage>({
		firstName: '',
		lastName: '',
		phone: '',
		email: '',
		message: '',
	})

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()

    // Reset errors
		setErrors({
			firstName: '',
			lastName: '',
			phone: '',
			email: '',
			message: '',
		})

		// validation
		if (!email.includes('@')) {
			setErrors({ ...errors, email: 'Email must include @' })
		}

		if (firstName.length < 1) {
			setErrors({
				...errors,
				firstName: 'First name must be longer than 1 character',
			})
		}
		if (lastName.length < 1) {
			setErrors({
				...errors,
				lastName: 'Last name must be longer than 1 character',
			})
		}
		if (message.length < 1) {
			setErrors({
				...errors,
				message: 'Message must be longer than 1 character',
			})
		}
		if (phone.length < 10 || phone.length > 11) {
			setErrors({ ...errors, phone: 'Phone number must be 10 characters' })
		}

		// Send data to backend
		console.log('Form submitted')

    // Clear form
		setFirstName('')
		setLastName('')
		setPhone('')
		setEmail('')
		setMessage('')
	}
	return (
		<form
			onSubmit={handleSubmit}
			className="xl:grid xl:grid-cols-2 flex flex-col justify-center items-center gap-2"
		>
			<Input
				type="text"
				label="First name"
				placeholder="John"
				name="firstName"
				value={firstName}
				onChange={(e) => setFirstName(e.target.value)}
			/>
			{errors.firstName && (
				<div className="text-red-500">{errors.firstName}</div>
			)}
			<Input
				type="text"
				label="Last name"
				placeholder="Smith"
				name="lastName"
				value={lastName}
				onChange={(e) => setLastName(e.target.value)}
			/>
			{errors.lastName && <div className="text-red-500">{errors.lastName}</div>}
			<Input
				type="tel"
				label="Phone number"
				placeholder="555-555-5555"
				name="phone"
				value={phone}
				onChange={(e) => setPhone(e.target.value)}
			/>
			{errors.phone && <div className="text-red-500">{errors.phone}</div>}
			<Input
				type="email"
				label="Email"
				placeholder="johnsmith@email.com"
				name="email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			{errors.email && <div className="text-red-500">{errors.email}</div>}
			<div className="w-full space-y-3 col-span-2 mb-2">
				<label htmlFor="message" className="mb-2 block text-sm font-medium">
					Message
				</label>
				<textarea
					rows={4}
					cols={100}
					className="block w-full rounded-md border-gray-200 px-4 py-4 text-sm focus:border-[#4078c8] focus:ring-[#4078c8] disabled:pointer-events-none disabled:opacity-50"
					name="message"
					placeholder="I am reaching out to volunteer. These are my available times."
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				></textarea>
			</div>
			{errors.message && <div className="text-red-500">{errors.message}</div>}
			<Button type="submit" className="col-start-2">
				Submit
			</Button>
		</form>
	)
}
export default Form
