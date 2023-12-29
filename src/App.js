import { Route, Routes } from 'react-router-dom'

import Header from './components/header/Header'
import Main from './pages/mainPage/Main'
import Post from './pages/posts/Posts'
import Message from './pages/message/Message'
import Friends from './pages/friends/Friends'
import Foto from './pages/foto/Foto'
import CreatePost from './pages/posts/CreatePost';



function App() {

	return (
		<div className='App'>
			<Header />
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/foto' element={<Foto />} />
				<Route path='/posts' element={<Post />} />
				<Route path='/message' element={<Message />} />
				<Route path='/friends' element={<Friends />} />
				<Route path='/create-post' element={<CreatePost />} />
			</Routes>
		</div>
	)
}

export default App
