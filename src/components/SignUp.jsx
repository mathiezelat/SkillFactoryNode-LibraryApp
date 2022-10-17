import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

const SignUp = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm()

	const onSubmit = data => {
		console.log(data)

		reset()
	}

	return (
		<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div className="py-6 px-4 sm:px-0 text-center">
				<h3 className="text-3xl font-medium leading-6 text-gray-900">
					Sign Up
				</h3>

			</div>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="py-2 mx-auto max-w-lg"
			>
				<div className="flex flex-col gap-4">
					<div className="flex flex-col">

						<label
							htmlFor="text"
							className="block text-sm font-medium text-gray-700"
						>
							First Name
						</label>
						<input
							id="firstName"
							type="text"
							className="mt-1 block w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
							{...register("firstName", {
								required: true,
								maxLength: 10,
							})}
						/>
					</div>

					<div
						className={`${errors.firstName ? 'visible' : 'invisible'
							}`}
					>
						{errors.firstName?.type === 'required' && (
							<p className="text-xs absolute text-red-500">
								First Name is required
							</p>
						)}
						{errors.firstName?.type === 'maxLength' && (
							<p className="text-xs absolute text-red-500">
								You must enter the required digits
							</p>
						)}
					</div>
				</div>
				<br />
				<div className="flex flex-col gap-4">

					<div className="flex flex-col">

						<label
							htmlFor="text"
							className="block text-sm font-medium text-gray-700"
						>
							Last Name
						</label>
						<input
							id="lastName"
							type="text"
							className="mt-1 block w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
							{...register("lastName", {
								required: true,
								maxLength: 10,
							})}
						/>
					</div>
				</div>
				<br />

				<div className="flex flex-col gap-4">

					<div className="flex flex-col">
						<label
							htmlFor="email"
							className="block text-sm font-medium text-gray-700"
						>
							Email
						</label>
						<input
							id="email"
							type="email"
							className="mt-1 block w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
							{...register('email', {
								required: true,
								pattern: /\S+@\S+\.\S+/,
							})}
						/>
						<div
							className={`${errors.email ? 'visible' : 'invisible'
								}`}
						>
							{errors.email?.type === 'required' && (
								<p className="text-xs absolute text-red-500">
									Email is required
								</p>
							)}
							{errors.email?.type === 'pattern' && (
								<p className="text-xs absolute text-red-500">
									Entered value does not match email format
								</p>
							)}
						</div>
					</div>
					<br />
					<div className="flex flex-col">
						<label
							htmlFor="password"
							className="block text-sm font-medium text-gray-700"
						>
							Password
						</label>
						<input
							id="password"
							type="password"
							className="mt-1 block w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
							{...register('password', {
								required: true,
								minLength: 8,
							})}
						/>
						<div
							className={`${errors.password ? 'visible' : 'invisible'
								}`}
						>
							{errors.password?.type === 'required' && (
								<p className="text-xs absolute text-red-500">
									Password is required
								</p>
							)}
							{errors.password?.type === 'minLength' && (
								<p className="text-xs absolute text-red-500">
									Password must contain more than 8 digits
								</p>
							)}
						</div>
					</div>
					<br />
					<div className="flex flex-col">
						<label
							htmlFor="password"
							className="block text-sm font-medium text-gray-700"
						>
							Confirm Password
						</label>
						<input
							id="password"
							type="password"
							className="mt-1 block w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
							{...register('password', {
								required: true,
								minLength: 8,
							})}
						/>
						<div
							className={`${errors.password ? 'visible' : 'invisible'
								}`}
						>
							{errors.password?.type === 'required' && (
								<p className="text-xs absolute text-red-500">
									Password is required
								</p>
							)}
							{errors.password?.type === 'minLength' && (
								<p className="text-xs absolute text-red-500">
									Password must contain more than 8 digits
								</p>
							)}
						</div>
					</div>

					<input
						to="/login"
						type="submit"
						value="Log in"
						className="cursor-pointer self-center inline-flex justify-center rounded-lg border border-transparent bg-blue-600 py-2 px-4 font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:blue-indigo-500 focus:ring-offset-2"
					/>
					
					

					<div className="flex justify-center items-center gap-1">
						<p className="text-sm text-gray-700">
							Don't have an account?
						</p>
						<Link
							to="/signup"
							className="text-sm text-blue-500 hover:text-blue-400"
						>
							Sign up
						</Link>
					</div>

					<div
						className={`${Object.keys(errors).length > 0
							? 'visible'
							: 'invisible'
							}`}
					>
						<p className="text-sm text-center text-red-500">
							There are errors, check form.
						</p>
					</div>
				</div>
			</form>
		</div>
	)
}

export default SignUp

