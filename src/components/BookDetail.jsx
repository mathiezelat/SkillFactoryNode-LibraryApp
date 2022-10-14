import { Link, useNavigate, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { deleteBook } from '../features/books/booksSlice'

const BookView = () => {
	const { id } = useParams()

	const navigate = useNavigate()

	const dispatch = useDispatch()

	const books = useSelector(state => state.books)

	const { img, title, author, isbn, published, description } = books.find(
		book => book.id === id
	)

	const handleDeleteBook = () => {
		dispatch(deleteBook(id))

		navigate('/books')
	}

	return (
		<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div className="my-6 grid grid-cols-12 gap-6">
				<div className="col-span-12 sm:col-span-6 md:col-span-4">
					<img
						src={img}
						alt={`Cover of the book ${title}`}
						className="h-full w-full object-cover object-center lg:h-full lg:w-full"
					/>
				</div>
				<div className="my-2 flex flex-col gap-2 col-span-12 sm:col-span-6 md:col-span-8">
					<h3 className="text-4xl font-semibold">{title}</h3>
					<div>
						<p className="text-lg">Author</p>
						<p className="text-xl">{author}</p>
					</div>
					<div>
						<p className="text-lg">ISBN</p>
						<p className="text-xl">{isbn}</p>
					</div>
					<div>
						<p className="text-lg">Published</p>
						<p className="text-xl">{published}</p>
					</div>
					<div>
						<p className="text-lg">Description</p>
						<p className="text-xl">{description}</p>
					</div>
					<div>
						<p className="text-lg">Options</p>
						<div className="flex gap-2">
							<button
								className="rounded-md border border-transparent bg-red-600 py-2 px-4 font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
								onClick={handleDeleteBook}
							>
								Delete
							</button>
							<Link
								to={`/update-book/${id}`}
								key={id}
								className="rounded-md border border-transparent bg-indigo-600 py-2 px-4 font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
							>
								Update
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default BookView
