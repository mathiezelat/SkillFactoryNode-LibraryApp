import { useDispatch, useSelector } from "react-redux";
import { deleteBook } from "../features/books/booksSlice";
import { Link } from "react-router-dom";

function BooksList() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteBook(id));
  };

  return (
    <article className="card-book-list">
      <div>
        <h3 className="count">Books: {books.length}</h3>
        {books.map((book) => {
          return (
            <div className="headings">
              <section className="book-container">
                <div key={book.id}>
                  <h2>{book.title}</h2>
                  <h3>{book.author}</h3>
                  <div className="image">
                    <img src={book.url} alt="imag-card" />
                  </div>
                  <Link to={`/update-book/${book.id}`}>Update</Link>
                  <Link to={`/detail-book/${book.id}`}>Details</Link>

                  <button onClick={() => handleDelete(book.id)}>Delete</button>
                </div>
              </section>
            </div>
          );
        })}
      </div>
    </article>
  );
}

export default BooksList;
