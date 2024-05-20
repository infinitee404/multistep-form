import { useContext } from 'react'
import { isMonthlyContext } from '../App'
// import { addOnsList } from '../App'

const Summary = () => {
	const { isMonthly, toggleIsMonthly } = useContext(isMonthlyContext)
	const unit = isMonthly ? 'mo' : 'yr'
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
					<span className='bold-price'>$9/{unit}</span>
				</div>
				<div className='line' />
				<div className='added'>
					<span className='instruction'>Online Service</span>
					<span>+$1/{unit}</span>
				</div>
				<div className='added'>
					<span className='instruction'>Larger Storage</span>
					<span>+$2/{unit}</span>
				</div>
				<div className='added'>
					<span className='instruction'>Larger Storage</span>
					<span>+$2/{unit}</span>
				</div>
			</div>
			<div className='total'>
				<span className='instruction'>Total (per {isMonthly ? 'month' : 'year'})</span>
				<span className='bold-price total-price'>$14/{unit}</span>
			</div>
		</>
	)
}

export default Summary
