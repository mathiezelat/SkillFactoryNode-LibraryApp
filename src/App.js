import './styles/App.css';
import { Route, Routes, Link } from 'react-router-dom';

//components
import BooksList from './components/BooksList';
import BookForm from './components/BookForm';
import Home from './components/Home';
import Details from './components/Details';




function NotFound() {
	return (
		<div>
			<h1>Not Found</h1>
			<Link to="/">Go Back Home</Link>
		</div>
	);
}

function App() {
	return (
		<div className="container-fluid">
			<header className="headings">
				<nav>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/books-list">Books List</Link>
						</li>
						<li>
							<Link to="/create-book">Add Book</Link>
						</li>
					</ul>
				</nav>
				<h1 className='title-primary'>Book Gallery</h1>
			</header>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/books-list' element={<BooksList />} />
				<Route path='/create-book' element={<BookForm />} />
				<Route path='/detail-book/:id' element={<Details />} />
				<Route path='/update-book/:id' element={<BookForm />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
	
}

export default App;
