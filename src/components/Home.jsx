import { Link } from 'react-router-dom'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import SvgBooks from '../assets/illustrations/SvgBooks'

function Home() {
	return (
		<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative overflow-hidden">
			<div className="flex flex-col justify-center items-center pt-20 ">
				<div>
					<div className="absolute left-0 right-0 px-8 md:px-4 flex flex-col justify-center items-center">
						<h1 className="text-slate-900 font-semibold text-4xl tracking-tight">
							Library App
						</h1>
						<p className="mt-2 text-slate-600">
							Library of your dreams
						</p>
						<div className="mt-4 text-center flex flex-col justify-center items-center gap-2">
							<p className="text-sm text-slate-600">
								What are you waiting for to get into the
								adventure of books?
							</p>
							<Link
								to="/books"
								className="flex justify-center items-center rounded-full px-2 py-1 text-sm font-medium text-gray-50 hover:text-white bg-gradient-to-br from-cyan-500 to-blue-500 shadow-md shadow-cyan-500/10"
							>
								Go to books!
								<ChevronRightIcon className="w-5 h-5" />
							</Link>
						</div>
					</div>
					<SvgBooks />
				</div>
			</div>
		</div>
	)
}

export default Home
