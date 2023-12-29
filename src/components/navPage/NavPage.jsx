import { NavLink, Link } from 'react-router-dom'

import './navPage.css'
import imgLogo from './img/user-logo.png'
import imgSettings from '../../icons/settings.svg'

import icon1 from "../../icons/fire.svg"
import icon2 from '../../icons/envelope.svg'
import icon3 from '../../icons/users.svg'
import icon4 from '../../icons/comment.svg'
import icon5 from '../../icons/picture.svg'


const NavPage = () => {

	return (
		<div className='menuContainer'>
			<div className='navPageLogo'>
				<img className='userLogoMenu' src={imgLogo} alt='logo' />
				<h2 className='userNameNav'>user name</h2>
				<Link to='/settings' className='linkNav'>
					<img className='imgSettings' src={imgSettings} alt='logo' />
				</Link>
			</div>

			<nav className='nawPage'>
				<NavLink to='/' className='linkMenu'>
					<img className='imgLinkMenu' src={icon1} alt='logo' />
					main
				</NavLink>
				<NavLink to='/foto' className='linkMenu'>
					<img className='imgLinkMenu' src={icon5} alt='logo' />
					foto
				</NavLink>
				<NavLink to='/posts' className='linkMenu'>
					<img className='imgLinkMenu' src={icon4} alt='logo' />
					posts
				</NavLink>
				<NavLink to='/friends' className='linkMenu'>
					<img className='imgLinkMenu' src={icon3} alt='logo' />
					friends
				</NavLink>
				<NavLink to='/message' className='linkMenu'>
					<img className='imgLinkMenu' src={icon2} alt='logo' />
					message
				</NavLink>
			</nav>
		</div>
	)
}

export default NavPage
