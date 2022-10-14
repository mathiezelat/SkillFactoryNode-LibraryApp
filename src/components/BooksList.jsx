import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import '../styles/index.css';

function BooksList() {
  const books = useSelector((state) => state.books);

  return (
    <div className="">
      <div className="count-number">
        <h3 className="count">Books: {books.length}</h3>
      </div>
      {books.map((book) => {
        return (
          <div className="">
            <div className="card-book">
              <div key={book.id}>
                <h2>{book.title}</h2>
                <h3>{book.author}</h3>
                <div className="image">
                  <img src={book.url} alt="imag-card" />
                </div>

                <Link className="btn-detail" to={`/detail-book/${book.id}`}>
                  Details
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default BooksList;
