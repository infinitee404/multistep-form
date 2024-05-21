import { useContext } from 'react'
import { isMonthlyContext } from '../App'
import { addOnsList } from '../App'

const Summary = () => {
	const { isMonthly, toggleIsMonthly } = useContext(isMonthlyContext)
	const { addOns } = useContext(addOnsList)
	const unit = isMonthly ? 'mo' : 'yr'
    let planCost = isMonthly ? 9 : 90
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
						<h4>Arcade ({isMonthly ? 'monthly' : 'yearly'})</h4>
						<button
							className='button-back change-button'
							onClick={toggleIsMonthly}
						>
							Change
						</button>
					</div>
					<span className='bold-price'>${planCost}/{unit}</span>
				</div>
				<div className='line' />
				{addOns.map((index, count) => {
                    totalCost += Number(addOns[count].value)
					return (
						<div className='added'>
							<span className='instruction'>{addOns[count].name}</span>
							<span>
								+${addOns[count].value}/{unit}
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
