import { useSelector } from 'react-redux'
import BookCard from './BookCard'

const BookList = () => {
	const books = useSelector(state => state.books)

	return (
		<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div className="my-6 grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
				{books.map(book => (
					<BookCard
						key={book.id}
						id={book.id}
						title={book.title}
						author={book.author}
						img={book.img}
					/>
				))}
			</div>
		</div>
	)
}

export default BookList
