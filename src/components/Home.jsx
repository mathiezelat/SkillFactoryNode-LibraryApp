// import BooksIcon from '../assets/icons/books.png'
import SvgBooks from '../assets/illustrations/SvgBooks'

function Home() {
	return (
		<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative overflow-hidden">
			<div className="flex flex-col justify-center items-center pt-20 ">
				<div>
					<div className="absolute left-0 right-0">
						<h1 className="text-slate-900 font-semibold text-4xl tracking-tight text-center">
							Library App
						</h1>
						<p className="mt-2 text-slate-600 text-center">
							Library of your dreams
						</p>
					</div>
					<SvgBooks />
				</div>
			</div>
		</div>
	)
}

export default Home
