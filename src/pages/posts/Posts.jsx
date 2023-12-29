import { NavLink } from 'react-router-dom'
import React, { useState, useEffect } from 'react'

import './posts.css'
import '../global.style.css'
import NavPage from '../../components/navPage/NavPage'

const Posts = () => {

	const [data, setData] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(
				'https://jsonplaceholder.typicode.com/posts'
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
				<NavLink to='/create-post' className='btnCreatePost'>
					создать пост
				</NavLink>

				{data.map(({ userId, id, title, body }) => (
					<div className='cardPost' key={id}>
						<h3 className='nameCardPost'>user id: {userId}</h3>
						<h3 className='titleCardPost'>{title}</h3>
						<p className='textCardPost'>{body}</p>
					</div>
				))}
			</div>
		</div>
	)
}

export default Posts
