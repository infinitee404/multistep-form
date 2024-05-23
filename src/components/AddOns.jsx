import { useContext } from 'react'
import { addOnsContext } from '../App'
import { isMonthlyContext } from '../App'

const AddOnsOption = ({ addOnName, addOnFeature, addOnRate }) => {
	const { addOns, changeAddons } = useContext(addOnsContext)
	const { isMonthly } = useContext(isMonthlyContext)
	const unit = isMonthly ? 'mo' : 'yr'
	const rate = isMonthly ? addOnRate : addOnRate * 10

	// Check if the addon is selected
	const isSelected = addOns.some((addOn) => addOn.name === addOnName)

	const selectedAddons = (event) => {
		if (event.target.checked) {
			changeAddons(event.target.id, event.target.value, 1)
		} else {
			changeAddons(event.target.id, event.target.value, 0)
		}
	}

	return (
		<label className='checkbox-wrapper' htmlFor={addOnName}>
			<div className={`add-ons-option ${isSelected && 'add-ons-selected'}`}>
				<div className='add-ons-left'>
					<input
						type='checkbox'
						onChange={selectedAddons}
						id={addOnName}
						value={addOnRate}
						checked={isSelected}
					/>
                    <div className='checkbox-input' />
					<div className='add-ons-description'>
						<h3>{addOnName}</h3>
						<p className='instruction'>{addOnFeature}</p>
					</div>
				</div>
				<div className='add-ons-right'>
					<p>
						+${rate}/{unit}
					</p>
				</div>
			</div>
		</label>
	)
}

const AddOns = () => {
	const AddOnsDetails = [
		{
			addOnName: 'Online service',
			addOnFeature: 'Access to multiplayer games',
			addOnRate: 1,
		},
		{
			addOnName: 'Larger Storage',
			addOnFeature: 'Extra 1TB of cloud save',
			addOnRate: 2,
		},
		{
			addOnName: 'Customizable Profile',
			addOnFeature: 'Custom theme on your profile',
			addOnRate: 2,
		},
	]
	return (
		<div className='plan-container'>
			<div className='heading'>
				<h1 className='title'>Pick add-ons</h1>
				<p className='instruction'>Add-ons help enhance your gaming experience.</p>
			</div>
			<div className='add-ons'>
				{AddOnsDetails.map((index) => (
					<AddOnsOption {...index} />
				))}
			</div>
		</div>
	)
}

export default AddOns
