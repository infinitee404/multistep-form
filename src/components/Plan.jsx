import { useContext } from 'react'
import { isMonthlyContext, selectedPlanContext } from '../App'

const PlanOption = ({ planName, planCost, freeMonths }) => {
	const { isMonthly } = useContext(isMonthlyContext)
	const { selectedPlan, toggleSelectedPlan } = useContext(selectedPlanContext)

	const price = `${isMonthly ? `${planCost}/mo` : `${planCost * 10}/yr`}`

	return (
		<div
			className={`plan-option ${selectedPlan === planName ? 'plan-selected' : ''}`}
			onClick={() => toggleSelectedPlan(planName)}
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
	const { selectedPlan } = useContext(selectedPlanContext)

	const planDetails = [
		{
			planName: 'Arcade',
			planCost: 9,
			freeMonths: 2,
		},
		{
			planName: 'Advanced',
			planCost: 12,
			freeMonths: 2,
		},
		{
			planName: 'Pro',
			planCost: 15,
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
				{planDetails.map((index) => (
					<PlanOption {...index} />
				))}
			</div>
			<div className='bill-toggle'>
				<span className={`toggle-options ${isMonthly && 'toggle-selected'}`}>Monthly</span>
				<input
					type='checkbox'
					id='switch'
					checked={!isMonthly}
				/>
				<label
					htmlFor='switch'
					onClick={toggleIsMonthly}
				/>
				<span className={`toggle-options ${!isMonthly && 'toggle-selected'}`}>Yearly</span>
			</div>
			{selectedPlan == 'error' && <div className='error-field'>Please select a plan.</div>}
		</>
	)
}

export default Plan
