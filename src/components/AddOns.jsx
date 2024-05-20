import { addOnsList } from '../App'

const AddOnsOption = ({ title, feature, rate }) => {
	return (
		<div className='add-ons-option'>
			{/* add-ons-selected = classname for selected */}
			<div className='add-ons-left'>
				<input type='checkbox' />
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

const AddOns = () => {
	return (
		<div className='plan-container'>
			<div className='heading'>
				<h1 className='title'>Pick add-ons</h1>
				<p className='instruction'>Add-ons help enhance your gaming experience.</p>
			</div>
			<div className='add-ons'>
				<AddOnsOption
					title='Online service'
					feature='Access to multiplayer games'
					rate={1}
				/>
				<AddOnsOption
					title='Larger Storage'
					feature='Extra 1TB of cloud save'
					rate={2}
				/>
				<AddOnsOption
					title='Customizable Profile'
					feature='Custom theme on your profile'
					rate={2}
				/>
			</div>
		</div>
	)
}

export default AddOns
