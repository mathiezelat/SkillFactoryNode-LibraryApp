import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import BookDetail from './components/BookDetail'
import BookForm from './components/BookForm'
import BooksList from './components/BooksList'
import Home from './components/Home'
import LogIn from './components/LogIn'
import NavBar from './components/NavBar'
import NotFound from './components/NotFound'
import SignUp from './components/SignUp'

import 'react-toastify/ReactToastify.min.css'

function App() {
	return (
		<div>
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/books" element={<BooksList />} />
				<Route path="/create-book" element={<BookForm />} />
				<Route path="/book/:id" element={<BookDetail />} />
				<Route path="/update-book/:id" element={<BookForm />} />
				<Route path="/login" element={<LogIn />} />
				<Route path="/signup" element={<SignUp />} />

				<Route path="*" element={<NotFound />} />
			</Routes>
			<ToastContainer position="bottom-right" newestOnTop />
		</div>
	)
}

export default App
