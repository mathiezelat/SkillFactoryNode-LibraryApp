import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'

const SignUp = () => {
	const navigate = useNavigate()

	const {
		register,
		handleSubmit,
		reset,
		watch,
		formState: { errors },
	} = useForm()

	const onSubmit = data => {
		console.log(data)

		reset()

		navigate('/login')
	}

	const [showPwd, setShowPwd] = useState(false)
	const [showPwd2, setShowPwd2] = useState(false)

	return (
		<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div className="py-6 px-4 sm:px-0 text-center">
				<h3 className="text-3xl font-medium leading-6 text-gray-900">
					Sign up
				</h3>
				<p className="mt-1 text-lg text-gray-600">
					Sign up to your favorite page ;)
				</p>
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
							First name
						</label>
						<input
							id="firstName"
							type="text"
							placeholder="John"
							className="mt-1 block w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
							{...register('firstName', {
								required: true,
								maxLength: 10,
							})}
						/>
						<div
							className={`${
								errors.firstName ? 'visible' : 'invisible'
							}`}
						>
							{errors.firstName?.type === 'required' && (
								<p className="text-xs absolute text-red-500">
									First name is required
								</p>
							)}
							{errors.firstName?.type === 'maxLength' && (
								<p className="text-xs absolute text-red-500">
									You must enter the required digits
								</p>
							)}
						</div>
					</div>
					<div className="flex flex-col">
						<label
							htmlFor="text"
							className="block text-sm font-medium text-gray-700"
						>
							Last name
						</label>
						<input
							id="lastName"
							type="text"
							placeholder="Doe"
							className="mt-1 block w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
							{...register('lastName', {
								required: true,
								maxLength: 10,
							})}
						/>
						<div
							className={`${
								errors.lastName ? 'visible' : 'invisible'
							}`}
						>
							{errors.lastName?.type === 'required' && (
								<p className="text-xs absolute text-red-500">
									Last name is required
								</p>
							)}
							{errors.lastName?.type === 'maxLength' && (
								<p className="text-xs absolute text-red-500">
									You must enter the required digits
								</p>
							)}
						</div>
					</div>
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
							placeholder="john@example.com"
							className="mt-1 block w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
							{...register('email', {
								required: true,
								pattern: /\S+@\S+\.\S+/,
							})}
						/>
						<div
							className={`${
								errors.email ? 'visible' : 'invisible'
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
					<div className="flex flex-col">
						<label
							htmlFor="password"
							className="block text-sm font-medium text-gray-700"
						>
							Password
						</label>
						<div className="flex justify-end items-center relative">
							<input
								id="password"
								type={showPwd ? 'text' : 'password'}
								placeholder="Enter Password"
								className="mt-1 block w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
								{...register('password', {
									autocomplited: false,
									required: true,
									minLength: 8,
								})}
							/>

							<div
								onClick={() => setShowPwd(!showPwd)}
								className="mt-1 absolute text-xl text-gray-500 p-3"
							>
								{showPwd ? (
									<AiOutlineEyeInvisible />
								) : (
									<AiOutlineEye />
								)}
							</div>
						</div>
						<div
							className={`${
								errors.password ? 'visible' : 'invisible'
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
					<div className="flex flex-col">
						<label
							htmlFor="password2"
							className="block text-sm font-medium text-gray-700"
						>
							Confirm password
						</label>
						<div className="flex justify-end items-center relative">
							<input
								id="password2"
								type={showPwd2 ? 'text' : 'password'}
								placeholder="Confirm Password"
								className="mt-1 block w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
								{...register('password2', {
									autocomplited: false,
									required: true,
									minLength: 8,
									validate: value => {
										if (watch('password') !== value) {
											return 'Password do not match'
										}
									},
								})}
							/>

							<div
								onClick={() => setShowPwd2(!showPwd2)}
								className="mt-1 absolute text-xl text-gray-500 p-3"
							>
								{showPwd2 ? (
									<AiOutlineEyeInvisible />
								) : (
									<AiOutlineEye />
								)}
							</div>
						</div>
						<div
							className={`${
								errors.password2 ? 'visible' : 'invisible'
							}`}
						>
							{errors.password2?.type === 'required' && (
								<p className="text-xs absolute text-red-500">
									Confirm password is required
								</p>
							)}
							{errors.password2?.type === 'minLength' && (
								<p className="text-xs absolute text-red-500">
									Confirm psassword must contain more than 8
									digits
								</p>
							)}
							{errors.password2?.type === 'validate' && (
								<p className="text-xs absolute text-red-500">
									Password do not match
								</p>
							)}
						</div>
					</div>

					<input
						type="submit"
						value="Sign up"
						className="cursor-pointer self-center inline-flex justify-center rounded-lg border border-transparent bg-blue-600 py-2 px-4 font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:blue-indigo-500 focus:ring-offset-2"
					/>

					<div className="flex justify-center items-center gap-1">
						<p className="text-sm text-gray-700">
							Have an account?
						</p>
						<Link
							to="/login"
							className="text-sm text-blue-500 hover:text-blue-400"
						>
							Log in
						</Link>
					</div>

					<div
						className={`${
							Object.keys(errors).length > 0
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
