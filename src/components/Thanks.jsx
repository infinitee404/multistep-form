import ThanksImage from '../assets/images/icon-thank-you.svg'

const Thanks = ({title, instruction}) => {
  return (
		<div className='thanks-container'>
			<img src={ThanksImage} />
			<h1 className='title'>{title}</h1>
			<p className='instruction'>{instruction}</p>
		</div>
  )
}

export default Thanks