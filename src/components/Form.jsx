import { useContext, useState, useEffect } from 'react'
import { formInfoContext } from '../App'

const Form = ({ gotoNextPage }) => {
	const { formInfo, handleFormInfo } = useContext(formInfoContext)
	const { prevName, prevEmail, prevNumber } = formInfo

	const [name, setName] = useState(prevName || '')
	const [email, setEmail] = useState(prevEmail || '')
	const [number, setNumber] = useState(prevNumber || '')
	const [isValid, setIsValid] = useState(true)
	const [emailError, setEmailError] = useState('')

	const handleNameChange = (event) => {
		setName(event.target.value)
	}

	const handleEmailChange = (event) => {
		setEmail(event.target.value)
	}

	const handleNumberChange = (event) => {
		const inputValue = event.target.value
		const numberRegex = /^\+?\d*$/ // Regex to match only numbers

		if (numberRegex.test(inputValue)) {
			setNumber(inputValue)
		}
	}

	const validateEmail = (email) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
		return emailRegex.test(email)
	}

	const checkFormValidation = () => {
		if (name.length === 0 || email.length === 0 || number.length === 0) {
			setIsValid(false)
			return false
		}

		if (!validateEmail(email)) {
			setEmailError('Invalid email address')
			setIsValid(false)
			return false
		}

		setEmailError('')
		setIsValid(true)
		return true
	}

	const handleGotoNextPage = (event) => {
		event.preventDefault()
		if (checkFormValidation()) {
			handleFormInfo({
				name: name,
				email: email,
				number: number,
			})
			gotoNextPage()
		}
	}

	// Set values of previous input if returned back
	useEffect(() => {
		formInfo.name && setName(formInfo.name)
		formInfo.email && setEmail(formInfo.email)
		formInfo.number && setNumber(formInfo.number)
	}, [])

	return (
		<>
			<div className='heading'>
				<h1 className='title'>Personal info</h1>
				<p className='instruction'>Please provide your name, email address, and phone number.</p>
			</div>
			<div className='input-heading'>
				<label htmlFor='name'>Name</label>
				{!isValid && name.length === 0 && <span>This field is required</span>}
			</div>
			<input
				type='text'
				id='name'
				placeholder='e.g. Stephen Curry'
				className='input-personal-info'
				autoComplete='off'
				value={name}
				onChange={handleNameChange}
			/>
			<form>
				<div className='input-heading'>
					<label htmlFor='email'>Email Address</label>
					{!isValid && email.length === 0 && <span>This field is required</span>}
					{emailError && <span>{emailError}</span>}
				</div>
				<input
					type='email'
					id='email'
					placeholder='e.g. stephencurry@nba.com'
					className='input-personal-info'
					autoComplete='off'
					value={email}
					onChange={handleEmailChange}
				/>
				<div className='input-heading'>
					<label htmlFor='phone'>Phone Number</label>
					{!isValid && number.length === 0 && <span>This field is required</span>}
				</div>
				<input
					type='text'
					id='phone'
					placeholder='e.g. +01 23 456 7890'
					className='input-personal-info'
					autoComplete='off'
					value={number}
					onChange={handleNumberChange}
				/>
				<div className='button-form-container'>
					<div className='button-flex'>
						<button
							className='button button-next'
							onClick={handleGotoNextPage}
						>
							Next Step
						</button>
					</div>
				</div>
			</form>
		</>
	)
}

export default Form
