import React from 'react'

const Sidebar = () => {
	return (
		<ul>
			<li>
				<span className='step-count selected'>1</span>
				<div className='step-right'>
					<span className='step instruction'>Step 1</span>
					Your info
				</div>
			</li>
			<li>
				<span className='step-count'>2</span>
				<div className='step-right'>
					<span className='step instruction'>Step 2</span>
					Select Plan
				</div>
			</li>
			<li>
				<span className='step-count'>3</span>
				<div className='step-right'>
					<span className='step instruction'>Step 3</span>
					Add-ons
				</div>
			</li>
			<li>
				<span className='step-count'>4</span>
				<div className='step-right'>
					<span className='step instruction'>Step 4</span>
					Summary
				</div>
			</li>
		</ul>
	)
}

export default Sidebar
