import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import Form from './components/Form'
import Plan from './components/Plan'
import AddOns from './components/AddOns'
import Summary from './components/Summary'
import Thanks from './components/Thanks'
import './styles.css'

export const isMonthlyContext = React.createContext()
export const addOnsList = React.createContext([])

const App = () => {
	const [stepNum, setStepNum] = useState(1)
	const [checkout, setCheckout] = useState(false)
	const [isMonthly, setIsMonthly] = useState(true)
	const [addOns, setAddOns] = useState([])

	const gotoNextPage = () => {
		if (stepNum <= 4) setStepNum((prevStep) => prevStep + 1)
	}

	const gotoPreviousPage = () => {
		if (stepNum <= 4) setStepNum((prevStep) => prevStep - 1)
	}

	const toggleIsMonthly = () => {
		setIsMonthly(!isMonthly)
	}

	const changeAddons = () => {
		setAddOns((prevAddOns) => {
			return [...prevAddOns]
		})
	}
	return (
		<isMonthlyContext.Provider value={{ isMonthly, toggleIsMonthly }}>
			<addOnsList.Provider value={{ addOns, changeAddons }}>
				<div className='app'>
					<aside className='sidebar'>
						<Sidebar stepCount={stepNum} />
					</aside>
					<main className='main'>
						{stepNum == 1 && <Form />}
						{stepNum == 2 && <Plan />}
						{stepNum == 3 && <AddOns />}
						{stepNum == 4 && !checkout && <Summary />}
						{!checkout ? (
							<div className='button-container'>
								<div className='button-flex'>
									{stepNum < 4 ? (
										<button
											className='button button-next'
											onClick={gotoNextPage}
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
									{stepNum != 1 && (
										<button
											className='button-back'
											onClick={gotoPreviousPage}
										>
											Go Back
										</button>
									)}
								</div>
							</div>
						) : (
							<Thanks />
						)}
					</main>
				</div>
			</addOnsList.Provider>
		</isMonthlyContext.Provider>
	)
}

export default App
