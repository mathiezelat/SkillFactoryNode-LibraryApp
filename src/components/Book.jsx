import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../features/books/booksSlice';

const Book = ({ title, author, url, id}) =>{

    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteBook(id));
        };

        return(
        <div className="card-book">
            <h2>{title}</h2>
            <h3>{author}</h3>
            <img src={url} alt="img"/>
            <Link to={`/detail-book/${id}`}><button>Details</button></Link>
            <button onClick={() => handleDelete(id)} className="btn-xxl">Delete</button> 
        </div>
    ) 
}

export default Book;