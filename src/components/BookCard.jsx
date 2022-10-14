import { Link } from 'react-router-dom'
const BookCard = ({ id, title, author, img }) => {
	return (
		<Link to={`/book/${id}`} key={id} className="group relative">
			<div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
				<img
					src={img}
					alt={`Cover of the book ${title}`}
					className="h-full w-full object-cover object-center lg:h-full lg:w-full"
				/>
			</div>
			<h3 className="mt-2 text-lg text-gray-900 break-all">{title}</h3>
			<p className="mt-1 text-sm font-medium text-gray-700 break-all">
				{author}
			</p>
		</Link>
	)
}

export default BookCard
