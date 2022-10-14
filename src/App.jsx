import { Route, Routes } from 'react-router-dom'
import BooksList from './components/BooksList'
import BookForm from './components/BookForm'
import Home from './components/Home'
import BookDetail from './components/BookDetail'
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'
import NavBar from './components/NavBar'
import NotFound from './components/NotFound'

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
		</div>
	)
}

export default App
