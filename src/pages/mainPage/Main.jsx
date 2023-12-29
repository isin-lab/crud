import './mainPage.css'
import '../global.style.css';
import NavPage from '../../components/navPage/NavPage'

const Main = () => {
	return (
		<div className='page'>
			<NavPage />
			<div className='containerPage'>
				<h2 className='namePage'>main</h2>
			</div>
		</div>
	)
}

export default Main;
