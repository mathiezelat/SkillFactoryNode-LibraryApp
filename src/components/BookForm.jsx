import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addBook, editBook } from "../features/books/booksSlice";
import { v4 as uuidv4 } from "uuid";

function BookForm() {
    const [book, setBook] = useState({
        title: "",
        author: "",
        yearOfPublication: "",
        url: "",
        description: "",
        isbn: "",
    });
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();
    const books = useSelector((state) => state.books);

    const handleChange = (e) => {
        setBook({
            ...book,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (params.id) {
            dispatch(editBook({ ...book, id: params.id }));
        } else {
            dispatch(
                addBook({
                    ...book,
                    id: uuidv4(),
                })
            );
        }

        navigate("/books-list");
    };

    useEffect(() => {
        if (params.id) {
            setBook(books.find((book) => book.id === params.id));
        }
    }, [params, books]);

    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="form-container">
                <label className="title-label">Title:</label>
                <input
                    className="form-input"
                    type="text"
                    name="title"
                    onChange={handleChange}
                    value={book.title}
                    placeholder="Write a title"
                    autoFocus
                />

                <br />

                <label className="title-label">Author: </label>
                <input
                    className="form-input"
                    type="text"
                    name="author"
                    onChange={handleChange}
                    value={book.author}
                    placeholder="Write a author"
                    autoFocus
                />

                <br />

                <label className="title-label">Edition Year: </label>
                <input
                    className="form-input"
                    name="yearOfPublication"
                    type="text"
                    placeholder="1900"
                    value={book.yearOfPublication}
                    onChange={handleChange}
                    autoFocus
                />

                <br />

                <label className="title-label">Source Image: </label>
                <input
                    className="form-input"
                    name="url"
                    type="text"
                    value={book.url}
                    placeholder="https://www.image.com/image.png"
                    onChange={handleChange}
                    autoFocus
                />

                <br />

                <label className="title-label">Description:</label>
                <textarea
                    className="form-textarea"
                    type="text"
                    name="description"
                    onChange={handleChange}
                    value={book.description}
                    placeholder="Write a description"
                    autoFocus
                />

                <br />

                <label className="title-label">ISBN: </label>
                <input
                    className="form-input"
                    name="isbn"
                    type="text"
                    placeholder="Optional"
                    value={book.isbn}
                    onChange={handleChange}
                    autoFocus
                />

                <br />

                <button type="submit" className="btn-save">
                    Save
                </button>
            </form>
        </div>
    );
}

export default BookForm;
