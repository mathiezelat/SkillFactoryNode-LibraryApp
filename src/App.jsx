import { Route, Routes, Link } from "react-router-dom";
//components
import BooksList from "./components/BooksList";
import BookForm from "./components/BookForm";
import Home from "./components/Home";
import Details from "./components/Details";
import Register from "./components/Register";



function NotFound() {
	return (
		<div className="n-f">
			<h1>Not Found</h1>
			<Link to="/">Go Back Home</Link>
		</div>
	);
}

function App() {
	return (
		<div className="">
			<div className="">
				<nav>
					<ul className="ul-nav">
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/books-list">Books List</Link>
						</li>
						<li>
							<Link to="/create-book">Add Book</Link>
						</li>
						{/* <img className="logo" src="../image/child-reading-book_icon-icons.com_49243.png" alt="logo" /> */}
					</ul>

				</nav>
				<p>
					<span>Book Gallery</span>
				</p>

			</div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/books-list" element={<BooksList />} />
				<Route path="/create-book" element={<BookForm />} />
				<Route path="/detail-book/:id" element={<Details />} />
				<Route path="/update-book/:id" element={<BookForm />} />
				<Route path="/register" element={<Register />} />

				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default App;
