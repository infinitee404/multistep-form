import React from 'react'
import Sidebar from './components/Sidebar'
import Form from './components/Form'
import Plan from './components/Plan'
import AddOns from './components/AddOns'
import Summary from './components/Summary'
import Thanks from './components/Thanks'
import './styles.css'

const App = () => {
	const flag = false
	return (
		<>
			<div className='app'>
				<aside className='sidebar'>
					<Sidebar />
				</aside>
				<main className='main'>
					{/* <Form
						title='Personal info'
						instruction='Please provide your name, email address, and phone number.'
					/> */}
					{/* <Plan
						title='Select your plan'
						instruction='You have the option of monthly or yearly billing'
					/> */}
					{/* <AddOns 
                        title='Pick add-ons'
                        instruction='Add-ons help enhance your gaming experience.'
                    /> */}
					<Summary
						title='Finishing up'
						instruction='Double-check everything looks OK before confirming.'
                        planType='Monthly'
					/>
					{/* <Thanks
						title='Thank you!'
						instruction='Thanks for conforming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@nbagaming.com.'
					/> */}
					<div className='button-container'>
						<div className='button-flex'>
							<button className='button-back'>Go Back</button>
							{flag ? (
								<button className='button button-next'>Next Step</button>
							) : (
								<button className='button button-confirm'>Confirm</button>
							)}
						</div>
					</div>
				</main>
			</div>
		</>
	)
}

export default App
