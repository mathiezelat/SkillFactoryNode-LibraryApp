import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useHref, useNavigate, useParams } from 'react-router-dom'
import { v4 as uuid } from 'uuid'
import { toast } from 'react-toastify'
import { createBook, updateBook } from '../features/books/booksSlice'

const BookForm = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm()

	const href = useHref()
	const { id } = useParams()
	const navigate = useNavigate()

	const dispatch = useDispatch()

	const books = useSelector(state => state.books)

	useEffect(() => {
		if (href === `/update-book/${id}`) {
			const book = books.find(book => book.id === id)

			if (book) {
				reset({
					title: book.title,
					author: book.author,
					published: book.published,
					img: book.img,
					description: book.description,
					isbn: book.isbn,
				})
			} else {
				navigate('/create-book')
			}
		} else {
			reset({
				title: '',
				author: '',
				published: '',
				img: '',
				description: '',
				isbn: '',
			})
		}
	}, [reset, href, books, id, navigate])

	const onSubmit = data => {
		if (href === `/update-book/${id}`) {
			const changeBook = {
				id,
				...data,
			}

			dispatch(updateBook(changeBook))

			toast('Updated book!', { type: 'success' })

			navigate(`/book/${id}`)
		} else {
			const newBook = {
				id: uuid(),
				...data,
			}

			dispatch(createBook(newBook))

			toast('Added book!', { type: 'success' })

			navigate('/books')
		}
	}

	return (
		<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div className="py-6 px-4 sm:px-0 text-center">
				<h3 className="text-3xl font-medium leading-6 text-gray-900">
					{href === `/update-book/${id}` ? 'Update book' : 'Add book'}
				</h3>
				<p className="mt-1 text-lg text-gray-600">
					{href === `/update-book/${id}`
						? 'Update your favorite book ;)'
						: 'Add your favorite book ;)'}
				</p>
			</div>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="py-2 mx-auto max-w-lg"
			>
				<div className="flex flex-col gap-4">
					<div className="flex flex-col">
						<label
							htmlFor="title"
							className="block text-sm font-medium text-gray-700"
						>
							Title
						</label>
						<input
							id="title"
							type="text"
							className="mt-1 block w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
							{...register('title', {
								required: true,
							})}
						/>
						<div
							className={`${
								errors.title ? 'visible' : 'invisible'
							}`}
						>
							{errors.title?.type === 'required' && (
								<p className="text-xs absolute text-red-500">
									Title is required
								</p>
							)}
						</div>
					</div>
					<div className="flex flex-col">
						<label
							htmlFor="author"
							className="block text-sm font-medium text-gray-700"
						>
							Author
						</label>
						<input
							id="author"
							type="text"
							className="mt-1 block w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
							{...register('author', {
								required: true,
							})}
						/>
						<div
							className={`${
								errors.author ? 'visible' : 'invisible'
							}`}
						>
							{errors.author?.type === 'required' && (
								<p className="text-xs absolute text-red-500">
									Author is required
								</p>
							)}
						</div>
					</div>
					<div className="flex flex-col">
						<label
							htmlFor="published"
							className="block text-sm font-medium text-gray-700"
						>
							Published
						</label>
						<input
							id="published"
							type="date"
							className="mt-1 block w-full rounded-md border-gray-300  focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
							{...register('published', {
								required: 'Published is required',
							})}
						/>
						<div
							className={`${
								errors.published ? 'visible' : 'invisible'
							}`}
						>
							{errors.published?.type === 'required' && (
								<p className="text-xs absolute text-red-500">
									Published is required
								</p>
							)}
						</div>
					</div>
					<div className="flex flex-col ">
						<label
							htmlFor="isbn"
							className="block text-sm font-medium text-gray-700"
						>
							ISBN
						</label>
						<input
							id="isbn"
							type="text"
							className="mt-1 block w-full rounded-md border-gray-300  focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
							{...register('isbn', {
								required: true,
							})}
						/>
						<div
							className={`${
								errors.isbn ? 'visible' : 'invisible'
							}`}
						>
							{errors.isbn?.type === 'required' && (
								<p className="text-xs absolute text-red-500">
									ISBN is required
								</p>
							)}
						</div>
					</div>
					<div className="flex flex-col">
						<label
							htmlFor="img"
							className="block text-sm font-medium text-gray-700"
						>
							Image
						</label>
						<input
							id="img"
							type="text"
							className="mt-1 block w-full rounded-md border-gray-300  focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
							{...register('img', {
								required: true,
								pattern:
									/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/i,
							})}
						/>
						<div
							className={`${
								errors.img ? 'visible' : 'invisible'
							}`}
						>
							{errors.img?.type === 'required' && (
								<p className="text-xs absolute text-red-500">
									Image is required
								</p>
							)}
							{errors.img?.type === 'pattern' && (
								<p className="text-xs absolute text-red-500">
									Image has to be a url
								</p>
							)}
						</div>
					</div>
					<div className="flex flex-col">
						<label
							htmlFor="description"
							className="block text-sm font-medium text-gray-700"
						>
							Description
						</label>
						<textarea
							id="description"
							rows={3}
							className="resize-none mt-1 block w-full rounded-md border-gray-300  focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
							{...register('description', {
								required: 'Description is required',
							})}
						/>
						<div
							className={`${
								errors.description ? 'visible' : 'invisible'
							}`}
						>
							{errors.description?.type === 'required' && (
								<p className="text-xs absolute text-red-500">
									Description is required
								</p>
							)}
						</div>
					</div>

					<input
						type="submit"
						value={
							href === `/update-book/${id}`
								? 'Update book'
								: 'Create book'
						}
						className="cursor-pointer self-center inline-flex justify-center rounded-lg border border-transparent bg-blue-600 py-2 px-4 font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:blue-indigo-500 focus:ring-offset-2"
					/>

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

export default BookForm
