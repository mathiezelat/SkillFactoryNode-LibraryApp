import { useSelector } from 'react-redux';


function Details() {
    const books = useSelector((state) => state.books);

    return (
        <article className="card-book-list">
            {books.map((book) => {
                return (
                    <div className="headings">
                        <section className='book-container'>
                            <div key={book.id}>
                                <img className='image'
                                    src={book.url}
                                    alt="imag-card"
                                />
                                <h2 >{book.title}</h2>
                                <h3 >{book.author}</h3>
                                <h4 >Published: "{book.yearOfPublication}"</h4>
                                <h4 >{book.description}</h4>
                                <h4 >I.S.B.N: -{book.isbn}-</h4>
                            </div>
                        </section>
                    </div>
                )
            })}

        </article>
    );
}

export default Details;