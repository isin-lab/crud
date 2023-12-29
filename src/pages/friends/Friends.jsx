import React, { useState, useEffect } from 'react'

import './friends.css'
import '../global.style.css'
import NavPage from '../../components/navPage/NavPage'

import user from "../../icons/user.svg"
import userWeb from '../../icons/globe.svg'
import userLocation from '../../icons/location.svg'
import userPhone from '../../icons/phone.svg'
import userEmail from '../../icons/email.svg'


const Friends = () => {
	const [data, setData] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(
				'https://jsonplaceholder.typicode.com/users'
			)
			const jsonData = await response.json()
			setData(jsonData)
		}
		fetchData()
	}, [])

	return (
		<div className='page'>
			<NavPage />
			<div className='containerPage'>
				<h2 className='namePage'>friends</h2>
				<div className='containerFriends'>
					{data.map(({ id, name, email, address, phone, website }) => (
						<div className='cardFriends' key={id}>
							<div className='flexWrapperHeader'>
								<img className='imgLogoCardFriends' src={user} alt='icons' />
								<h2 className='friendsName'>{name}</h2>
							</div>

							<div className='flexWrapper'>
								<img className='iconCardFriends' src={userWeb} alt='icons' />
								<h2 className='friendsText'>{website}</h2>
							</div>

							<div className='flexWrapper'>
								<img
									className='iconCardFriends'
									src={userLocation}
									alt='icons'
								/>
								<h2 className='friendsText'>
									{address.street}/{address.suite}
								</h2>
							</div>

							<div className='flexWrapper'>
								<img className='iconCardFriends' src={userPhone} alt='icons' />
								<h2 className='friendsText'>{phone}</h2>
							</div>

							<div className='flexWrapper'>
								<img className='iconCardFriends' src={userEmail} alt='icons' />
								<h2 className='friendsText'>{email}</h2>
							</div>

							<p className='textCardFoto'>{}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Friends
