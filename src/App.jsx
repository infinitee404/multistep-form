import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import Form from './components/Form'
import Plan from './components/Plan'
import AddOns from './components/AddOns'
import Summary from './components/Summary'
import Thanks from './components/Thanks'
import Buttons from './components/Buttons'
import './styles.css'

export const formInfoContext = React.createContext()
export const selectedPlanContext = React.createContext()
export const isMonthlyContext = React.createContext()
export const addOnsContext = React.createContext()

const App = () => {
	// Step-count states
	const [stepNum, setStepNum] = useState(1)
	const [checkout, setCheckout] = useState(false)

	// Context States
	const [formInfo, setFormInfo] = useState({
		name: '',
		email: '',
		number: '',
	})
	const [isMonthly, setIsMonthly] = useState(true)
	const [addOns, setAddOns] = useState([])
	const [selectedPlan, setSelectedPlan] = useState(null)

	const gotoNextPage = () => {
		if (stepNum < 4) setStepNum((prevStep) => prevStep + 1)
	}

	const gotoPreviousPage = () => {
		if (stepNum <= 4) setStepNum((prevStep) => prevStep - 1)
	}

	const handleFormInfo = (newInfo) => {
		setFormInfo({ ...newInfo })
	}

	const toggleSelectedPlan = (newPlan) => {
		// console.log(selectedPlan)
		if (newPlan == 'error') {
			setSelectedPlan('error')
			return
		}
		setSelectedPlan((prevPlan) => (prevPlan === newPlan ? null : newPlan))
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

	return (
		<>
			<formInfoContext.Provider value={{ formInfo, handleFormInfo }}>
				<selectedPlanContext.Provider value={{ selectedPlan, toggleSelectedPlan }}>
					<isMonthlyContext.Provider value={{ isMonthly, toggleIsMonthly }}>
						<addOnsContext.Provider value={{ addOns, changeAddons }}>
							<div className='app'>
								<aside className='sidebar'>
									<Sidebar stepCount={stepNum} />
								</aside>
								<main className='main'>
									{stepNum == 1 && <Form gotoNextPage={gotoNextPage} />}
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
						</addOnsContext.Provider>
					</isMonthlyContext.Provider>
				</selectedPlanContext.Provider>
			</formInfoContext.Provider>
		</>
	)
}

export default App
