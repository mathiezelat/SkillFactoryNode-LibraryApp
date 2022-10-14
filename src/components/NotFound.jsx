import { Link } from 'react-router-dom'

const NotFound = () => {
	return (
		<div className="n-f">
			<h1>Not Found</h1>
			<Link to="/">Go Back Home</Link>
		</div>
	)
}

export default NotFound
