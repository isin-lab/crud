import { NavLink } from 'react-router-dom'
import {  useState } from 'react'

import './posts.css'
import '../global.style.css'
import NavPage from '../../components/navPage/NavPage'
  

const CreatePost = () => {

  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const post = {
      title,
      text,
    };

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(post),
      });

      if (!response.ok) {
        throw new Error('Ошибка запроса');
      }
      
      setTitle('');
      setText('');

      console.log('Пост успешно отправлен');
    } catch (error) {
      console.error(error);
      }
  }
    return (
			<div className='page'>
				<NavPage />
				<div className='containerPage'>
					<NavLink to='/posts' className='btnCreatePost'>
						вернуться к постам
					</NavLink>
					<form className='cardPost' onSubmit={handleSubmit}>
						<div>
							<label htmlFor='title'>заголовок</label>

							<input
								type='text'
								id='title'
								value={title}
								onChange={e => setTitle(e.target.value)}
							/>
						</div>
						<div>
							<label htmlFor='text'>введите текст</label>

							<textarea
								id='text'
								value={text}
								onChange={e => setText(e.target.value)}
							/>
						</div>
						<button className='btnCreatePost' type='submit'>
							Отправить
						</button>
					</form>
				</div>
			</div>
		)
  
}

export default CreatePost;
