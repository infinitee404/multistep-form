import React from 'react'

const Sidebar = ({ stepCount }) => {
	const stepTitle = ['Your info', 'Select Plan', 'Add-ons', 'Summary']
	return (
		<ul>
			{stepTitle.map((index, value) => {
				return (
					<li key={index}>
						<span className={`step-count ${stepCount == value + 1 ? 'selected' : ''}`}>{value + 1}</span>
						<div className='step-right'>
							<span className='step instruction'>Step {value + 1}</span>
							{index}
						</div>
					</li>
				)
			})}
		</ul>
	)
}

export default Sidebar
