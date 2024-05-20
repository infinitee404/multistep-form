import ThanksImage from '../assets/images/icon-thank-you.svg'

const Thanks = ({ title, instruction }) => {
	return (
		<div className='thanks-container'>
			<img src={ThanksImage} />
			<h1 className='title'>Thank you!</h1>
			<p className='instruction'>
				Thanks for conforming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email
				us at support@nbagaming.com.
			</p>
		</div>
	)
}

export default Thanks
