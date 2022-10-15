import { Link } from 'react-router-dom'
const BookCard = ({ id, title, author, img }) => {
	return (
		<Link to={`/book/${id}`} key={id} className="group relative">
			<div className="min-h-80 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-80 aspect-auto h-64 md:h-72 lg:h-80 transition-opacity">
				<img
					src={img}
					alt={`Cover of the book ${title}`}
					className="h-full w-full object-cover object-center"
				/>
			</div>
			<h3 className="mt-2 text-gray-900 break-word leading-tight">
				{title}
			</h3>
			<p className="mt-1 text-xs text-gray-700 break-all">{author}</p>
		</Link>
	)
}

export default BookCard
