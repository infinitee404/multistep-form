import { useContext } from 'react'
import { isMonthlyContext } from '../App'

const PlanOption = ({ planName, planCostMonthly, planCostYearly, freeMonths, isSelected }) => {
	const { isMonthly } = useContext(isMonthlyContext)
	const price = `${isMonthly ? `${planCostMonthly}/mo` : `${planCostYearly}/yr`}`
	return (
		<div
			className={`plan-option ${isSelected ? 'plan-selected' : ''}`}
			onClick={() => console.log('hello ', planName)}
		>
			<img
				src={`./src/assets/images/icon-${planName}.svg`}
				alt='plan-logo'
			/>
			<div className='plan-description'>
				<h3>{planName}</h3>
				<p className='instruction'>${price}</p>
				{!isMonthly && <p>{freeMonths} months free</p>}
			</div>
		</div>
	)
}

const Plan = () => {
	const { isMonthly, toggleIsMonthly } = useContext(isMonthlyContext)

	const planDetails = [
		{
			planName: 'Arcade',
			planCostMonthly: 9,
			planCostYearly: 90,
			freeMonths: 2,
		},
		{
			planName: 'Advanced',
			planCostMonthly: 12,
			planCostYearly: 120,
			freeMonths: 2,
		},
		{
			planName: 'Pro',
			planCostMonthly: 15,
			planCostYearly: 150,
			freeMonths: 2,
		},
	]

	return (
		<>
			<div className='heading'>
				<h1 className='title'>Select your plan</h1>
				<p className='instruction'>You have the option of monthly or yearly billing.</p>
			</div>
			<div className='plans'>
				{planDetails.map((index) => {
					return (
						<PlanOption
							planName={index.planName}
							planCostMonthly={index.planCostMonthly}
							planCostYearly={index.planCostYearly}
							freeMonths={index.freeMonths}
						/>
					)
				})}
			</div>
			<div className='bill-toggle'>
				<span className={`toggle-options ${isMonthly && 'toggle-selected'}`}>Monthly</span>
				<input
					type='checkbox'
					id='switch'
				/>
				<label
					for='switch'
					onClick={toggleIsMonthly}
				/>
				<span className={`toggle-options ${!isMonthly && 'toggle-selected'}`}>Yearly</span>
			</div>
		</>
	)
}

export default Plan
