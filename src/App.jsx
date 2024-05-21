import React, { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar'
import Form from './components/Form'
import Plan from './components/Plan'
import AddOns from './components/AddOns'
import Summary from './components/Summary'
import Thanks from './components/Thanks'
import Buttons from './components/Buttons'
import './styles.css'

export const addOnsListContext = React.createContext()
export const isMonthlyContext = React.createContext()
export const selectedPlanContext = React.createContext()

const App = () => {
	const [stepNum, setStepNum] = useState(1)
	const [checkout, setCheckout] = useState(false)
	const [isMonthly, setIsMonthly] = useState(true)
	const [addOns, setAddOns] = useState([])
	const [selectedPlan, setSelectedPlan] = useState(null)
	const [isValidated, setIsValidated] = useState({
		validName: true,
		validEmail: true,
		validNumber: true,
		validPlan: true,
	})

	const gotoNextPage = () => {
		if (isValidated.validName && isValidated.validEmail && isValidated.validNumber) {
			if (stepNum <= 4) setStepNum((prevStep) => prevStep + 1)
		}
	}

	const gotoPreviousPage = () => {
		if (stepNum <= 4) setStepNum((prevStep) => prevStep - 1)
	}

	const toggleIsMonthly = () => {
		setIsMonthly(!isMonthly)
	}

	const changeAddons = (newAddOnName, newAddOnValue, addToList) => {
		setAddOns((prevAddOns) => {
			if (addToList) {
				return [...prevAddOns, { name: newAddOnName, value: newAddOnValue }]
			} else {
				return prevAddOns.filter((addon) => addon.name !== newAddOnName)
			}
		})
	}

	const toggleSelectedPlan = (newPlan) => {
		setSelectedPlan(newPlan)
	}

    const handleCheckout = () =>{
        setCheckout(true)
    }

	return (
		<isMonthlyContext.Provider value={{ isMonthly, toggleIsMonthly }}>
			<addOnsListContext.Provider value={{ addOns, changeAddons }}>
				<selectedPlanContext.Provider value={{ selectedPlan, toggleSelectedPlan }}>
					<div className='app'>
						<aside className='sidebar'>
							<Sidebar stepCount={stepNum} />
						</aside>
						<main className='main'>
							{stepNum == 1 && <Form isValid={isValidated} />}
							{stepNum == 2 && <Plan />}
							{stepNum == 3 && <AddOns />}
							{stepNum == 4 && !checkout && <Summary />}
							{!checkout ? (
								<Buttons
									stepNum={stepNum}
									gotoNextPage={gotoNextPage}
									gotoPreviousPage={gotoPreviousPage}
									setCheckout={setCheckout}
								/>
							) : (
								<Thanks />
							)}
						</main>
					</div>
				</selectedPlanContext.Provider>
			</addOnsListContext.Provider>
		</isMonthlyContext.Provider>
	)
}

export default App
