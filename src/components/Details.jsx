import { useDispatch, useSelector } from "react-redux";
import { deleteBook } from "../features/books/booksSlice";
import { Link } from "react-router-dom";

function Details() {
    const books = useSelector((state) => state.books);
    const dispatch = useDispatch();
    const handleDelete = (id) => {
        dispatch(deleteBook(id));
        
    };
    return (
        <div className="">
            {books.map((book) => {
                return (
                    <div className="card-book">
                        <div key={books.id}>
                            <img className="image" src={book.url} alt="imag-card" />
                            <h2>{book.title}</h2>
                            <h3>{book.author}</h3>
                            <h4>Published: "{book.yearOfPublication}"</h4>
                            <h4>{book.description}</h4>
                            <h4>I.S.B.N: -{book.isbn}-</h4>
                            <Link className="comp" to={`/update-book/${book.id}`}>
                                Update
                            </Link>
                            <button onClick={() => handleDelete(book.id)} className="btn-xxl">
                                Delete
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Details;
