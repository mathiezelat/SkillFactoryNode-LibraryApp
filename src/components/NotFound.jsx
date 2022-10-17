import { Link } from 'react-router-dom'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import SvgError404 from '../assets/illustrations/SvgError404'

const NotFound = () => {
	return (
		<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative overflow-hidden">
			<div className="flex flex-col items-center justify-center">
				<div>
					<div className="p-20 absolute left-0 right-0 px-8 md:px-4 flex flex-col justify-center items-center">
						<h1 className="text-slate-900 font-semibold text-4xl tracking-tight">
							Not found
						</h1>
						<p className="mt-2 text-slate-600">
							Sorry, the page you are looking for doesn't exist
						</p>
						<Link
							to="/"
							className="mt-1 flex justify-center items-center rounded-full px-2 py-1 text-sm font-medium text-gray-50 hover:text-white bg-gradient-to-br from-cyan-500 to-blue-500 shadow-md shadow-cyan-500/10"
						>
							Back to Home!
							<ChevronRightIcon className="w-5 h-5" />
						</Link>
					</div>
					<SvgError404 />
				</div>
			</div>
		</div>
	)
}

export default NotFound
