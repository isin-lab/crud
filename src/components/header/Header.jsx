
import React from 'react'

import './style.css'
import userLogo from './img/user-logo.png'
import menu from './img/menu.png'


const Header = () => {
	return (
		<div className='header'>
			<h1 className='logoHeader'>logo site</h1>
			<div className='headerEnd'>
				<img src={userLogo} className='btnHeader' alt='logo' />
				<img src={menu} className='btnHeader' alt='menu' />
			</div>
		</div>
	)
}

export default Header
