import React, { useState, useEffect } from 'react'

import './foto.css'
import '../global.style.css'
import NavPage from '../../components/navPage/NavPage'
import Loader from '../../components/loader/Loader'

const Foto = () => {
	const [data, setData] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch('https://jsonplaceholder.typicode.com/photos')
			const jsonData = await response.json()
			setData(jsonData)
			setLoading(false) 
		}
			
		fetchData()
	}, [])

	

 return (
        <div className='page'>
            <NavPage />
            <div className='containerPage'>
                <h2 className='namePage'>foto</h2>
                <div className='containerFoto'>
                    {loading ? (
                        <Loader /> // Отображаем компонент Loader, пока идет загрузка
                    ) : (
                        data.map(({ thumbnailUrl, id, title }) => (
                            <div className='cardFoto' key={id}>
                                <img className='imgFotoCard' src={thumbnailUrl} alt='' />
                                <p className='textCardFoto'>{title}</p>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}

export default Foto




