const Form = ({isValid}) => {
	return (
		<>
			<div className='heading'>
				<h1 className='title'>Personal info</h1>
				<p className='instruction'>Please provide your name, email address, and phone number.</p>
			</div>
			<div className='input-heading'>
				<label htmlFor='name'>Name</label>
				{!isValid.validName && <span>This field is requied</span>}
			</div>
			<input
				type='text'
				id='name'
				placeholder='e.g. Stephen Curry'
				className='input-personal-info'
			/>
			<div className='input-heading'>
				<label htmlFor='email'>Email Address</label>
				{!isValid.validEmail && <span>This field is requied</span>}
			</div>
			<input
				type='email'
				id='email'
				placeholder='e.g. stephancurrey@nba.com'
				className='input-personal-info'
			/>
			<div className='input-heading'>
				<label htmlFor='phone'>Phone Number</label>
				{!isValid.validNumber && <span>This field is requied</span>}
			</div>
			<input
				type='text'
				id='phone'
				placeholder='e.g. +01 23 456 7890'
				className='input-personal-info input-error'
			/>
		</>
	)
}

export default Form
