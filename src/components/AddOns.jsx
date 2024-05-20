const AddOnsOption = ({ isChecked, title, feature, rate }) => {
	return (
		<div className={`add-ons-option ${isChecked && 'add-ons-selected'}`}>
			<div className='add-ons-left'>
				<input
					type='checkbox'
					checked={isChecked}
				/>
				<div className='add-ons-description'>
					<h3>{title}</h3>
					<p className='instruction'>{feature}</p>
				</div>
			</div>
			<div className='add-ons-right'>
				<p>+${rate}/mo</p>
			</div>
		</div>
	)
}

const AddOns = ({ title, instruction }) => {
	return (
		<div className='plan-container'>
			<div className='heading'>
				<h1 className='title'>{title}</h1>
				<p className='instruction'>{instruction}</p>
			</div>
			<div className='add-ons'>
				<AddOnsOption
					isChecked={true}
					title='Online service'
					feature='Access to multiplayer games'
					rate={1}
				/>
				<AddOnsOption
					isChecked={true}
					title='Larger Storage'
					feature='Extra 1TB of cloud save'
					rate={2}
				/>
				<AddOnsOption
					isChecked={false}
					title='Customizable Profile'
					feature='Custom theme on your profile'
					rate={2}
				/>
			</div>
		</div>
	)
}

export default AddOns
