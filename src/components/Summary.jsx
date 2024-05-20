const Summary = ({ title, instruction, planType }) => {
	return (
		<>
			<div className='heading'>
				<h1 className='title'>{title}</h1>
				<p className='instruction'>{instruction}</p>
			</div>
			<div className='summary'>
				<div className='plan-summary'>
					<div className='plan-summary-left'>
						<h4>Arcade ({planType})</h4>
						<button className='button-back change-button'>Change</button>
					</div>
					<span className="bold-price">$9/mo</span>
				</div>
				<div className='line' />
				<div className='added'>
					<span className='instruction'>Online Service</span>
					<span>+$1/mo</span>
				</div>
				<div className='added'>
					<span className='instruction'>Larger Storage</span>
					<span>+$2/mo</span>
				</div>
				<div className='added'>
					<span className='instruction'>Larger Storage</span>
					<span>+$2/mo</span>
				</div>
			</div>
			<div className='total'>
				<span className='instruction'>Total (per {planType})</span>
				<span className="bold-price total-price">$14/mo</span>
			</div>
		</>
	)
}

export default Summary
