import { useContext } from 'react'
import { selectedPlanContext } from '../App'

const Buttons = ({ stepNum, gotoNextPage, gotoPreviousPage, setCheckout }) => {
	const { selectedPlan } = useContext(selectedPlanContext)
	const handleGotoNextPage = () => {
        console.log('next page')
		if (stepNum == 2) {
			if (selectedPlan != null) {
				gotoNextPage()
				return
			}
		} else {
			gotoNextPage()
		}
	}
	return (
		<div className='button-container'>
			<div className='button-flex'>
				{stepNum < 4 ? (
					<button
						className='button button-next'
						onClick={handleGotoNextPage}
					>
						Next Step
					</button>
				) : (
					<button
						className='button button-confirm'
						onClick={() => setCheckout(true)}
					>
						Confirm
					</button>
				)}
				{stepNum !== 1 && (
					<button
						className='button-back'
						onClick={gotoPreviousPage}
					>
						Go Back
					</button>
				)}
			</div>
		</div>
	)
}

export default Buttons
