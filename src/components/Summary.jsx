import { useContext } from 'react'
import { isMonthlyContext, addOnsListContext, selectedPlanContext } from '../App'

const Summary = () => {
	const { isMonthly, toggleIsMonthly } = useContext(isMonthlyContext)
	const { addOns } = useContext(addOnsListContext)
	const { selectedPlan } = useContext(selectedPlanContext)
	const unit = isMonthly ? 'mo' : 'yr'
	let planCost
	if (selectedPlan === 'Arcade') {
		planCost = isMonthly ? 9 : 90
	} else if (selectedPlan === 'Advanced') {
		planCost = isMonthly ? 12 : 120
	} else if (selectedPlan === 'Pro') {
		planCost = isMonthly ? 15 : 150
	}
	let totalCost = planCost
	return (
		<>
			<div className='heading'>
				<h1 className='title'>Finishing up</h1>
				<p className='instruction'>Double-check everything looks OK before confirming.</p>
			</div>
			<div className='summary'>
				<div className='plan-summary'>
					<div className='plan-summary-left'>
						<h4>
							{selectedPlan} ({isMonthly ? 'monthly' : 'yearly'})
						</h4>
						<button
							className='button-back change-button'
							onClick={toggleIsMonthly}
						>
							Change
						</button>
					</div>
					<span className='bold-price'>
						${planCost}/{unit}
					</span>
				</div>
				<div className='line' />
				{addOns.map((addOn, count) => {
					const value = unit === 'yr' ? addOn.value * 10 : addOn.value
					totalCost += Number(value)
					return (
						<div
							className='added'
							key={count}
						>
							<span className='instruction'>{addOn.name}</span>
							<span>
								+${value}/{unit}
							</span>
						</div>
					)
				})}

				<div className='total'>
					<span className='instruction'>Total (per {isMonthly ? 'month' : 'year'})</span>
					<span className='bold-price total-price'>
						${totalCost}/{unit}
					</span>
				</div>
			</div>
		</>
	)
}

export default Summary
