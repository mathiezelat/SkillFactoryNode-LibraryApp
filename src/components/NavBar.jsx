import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
	const [open, setOpen] = useState(false)

	const navigation = {
		pages: [
			{ name: 'Books', href: '/books' },
			{ name: 'Create book', href: '/create-book' },
		],
	}

	return (
		<div className="bg-white">
			<Transition.Root show={open} as={Fragment}>
				<Dialog
					as="div"
					className="relative z-40 lg:hidden"
					onClose={setOpen}
				>
					<Transition.Child
						as={Fragment}
						enter="transition-opacity ease-linear duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="transition-opacity ease-linear duration-300"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black bg-opacity-25" />
					</Transition.Child>

					<div className="fixed inset-0 z-40 flex">
						<Transition.Child
							as={Fragment}
							enter="transition ease-in-out duration-300 transform"
							enterFrom="-translate-x-full"
							enterTo="translate-x-0"
							leave="transition ease-in-out duration-300 transform"
							leaveFrom="translate-x-0"
							leaveTo="-translate-x-full"
						>
							<Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
								<div className="flex px-4 pt-5 pb-2">
									<button
										type="button"
										className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
										onClick={() => setOpen(false)}
									>
										<span className="sr-only">
											Close menu
										</span>
										<XMarkIcon
											className="h-6 w-6"
											aria-hidden="true"
										/>
									</button>
								</div>

								<div className="space-y-6 py-6 px-4">
									{navigation.pages.map(page => (
										<div
											key={page.name}
											className="flow-root"
										>
											<NavLink
												to={page.href}
												className="-m-2 block p-2 font-medium text-gray-900"
												onClick={() => setOpen(false)}
											>
												{page.name}
											</NavLink>
										</div>
									))}
								</div>

								<div className="border-t border-gray-100 mx-4"></div>

								<div className="space-y-6 py-6 px-4">
									<div className="flow-root">
										<NavLink
											to="/login"
											className="-m-2 block p-2 font-medium text-gray-900"
										>
											Log in
										</NavLink>
									</div>
									<div className="flow-root">
										<NavLink
											to="/signup"
											className="-m-2 block p-2 font-medium text-gray-900"
										>
											Sign up
										</NavLink>
									</div>
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition.Root>

			<header className="relative bg-white">
				<nav
					aria-label="Top"
					className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
				>
					<div className="flex h-16 items-center justify-between">
						<button
							type="button"
							className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
							onClick={() => setOpen(true)}
						>
							<span className="sr-only">Open menu</span>
							<Bars3Icon className="h-6 w-6" aria-hidden="true" />
						</button>

						<div className="flex">
							<NavLink to="/" className="flex items-center gap-2">
								<span className="sr-only">Library App</span>
								<img
									className="h-8 w-auto"
									src="https://cdn-icons-png.flaticon.com/512/2682/2682482.png"
									alt=""
								/>
								<span className="hidden md:block font-semibold">
									Library App
								</span>
							</NavLink>
						</div>

						<div className="hidden lg:ml-8 lg:block lg:self-stretch">
							<div className="flex h-full space-x-8">
								{navigation.pages.map(page => (
									<NavLink
										key={page.name}
										to={page.href}
										className="flex items-center font-medium text-gray-700 hover:text-gray-800"
									>
										{page.name}
									</NavLink>
								))}
							</div>
						</div>

						<div className="hidden ml-auto lg:flex items-center">
							<div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
								<NavLink
									to="/login"
									className="font-medium text-gray-700 hover:text-gray-800"
								>
									Log in
								</NavLink>
								<NavLink
									to="/signup"
									className="rounded-full px-4 py-2 font-medium text-gray-50 hover:text-white bg-gradient-to-br from-cyan-500 to-blue-500 shadow-md shadow-cyan-500/10"
								>
									Sign up
								</NavLink>
							</div>
						</div>
					</div>
				</nav>
			</header>
		</div>
	)
}

export default NavBar
