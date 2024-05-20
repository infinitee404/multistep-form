import { useState } from 'react'

const PlanOption = ({ planName, planCostMonthly, freeMonths, isSelected }) => {
	return (
		<div className={`plan-option ${isSelected ? 'plan-selected' : ''}`}>
			<img
				src={`./src/assets/images/icon-${planName}.svg`}
				alt='plan-logo'
			/>
			<div className='plan-description'>
				<h3>{planName}</h3>
				<p className='instruction'>${planCostMonthly}/mo</p>
				<p>{freeMonths} months free</p>
			</div>
		</div>
	)
}

const Plan = ({ title, instruction }) => {
	const [isMonthly, setIsMonthly] = useState(true)

	const handleChange = () => {
		setIsMonthly(!isMonthly)
		console.log(isMonthly)
	}
	return (
		<>
			<div className='heading'>
				<h1 className='title'>{title}</h1>
				<p className='instruction'>{instruction}</p>
			</div>
			<div className='plans'>
				<PlanOption
					planName='Arcade'
					planCostMonthly={9}
					freeMonths={2}
					isSelected={true}
				/>
				<PlanOption
					planName='Advanced'
					planCostMonthly={12}
					freeMonths={2}
					isSelected={false}
				/>
				<PlanOption
					planName='Pro'
					planCostMonthly={15}
					freeMonths={2}
					isSelected={false}
				/>
			</div>
			<div className='bill-toggle'>
				<span className={`toggle-options ${isMonthly && 'toggle-selected'}`}>Monthly</span>
				<input
					type='checkbox'
					id='switch'
				/>
				<label
					for='switch'
					onClick={handleChange}
				/>
				<span className={`toggle-options ${!isMonthly && 'toggle-selected'}`}>Yearly</span>
			</div>
		</>
	)
}

export default Plan
