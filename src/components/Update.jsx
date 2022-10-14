import { Link, useParams } from "react-router-dom";

const Update = () => {
    const { id } = useParams();
    return(
        
        <div className=''>
            Update (TEST)
            <form >
            
            <label>Title: </label>
            <input
            name="title" 
            type="text" 
            placeholder="Write"
            />

            <br/> 

            <label>Author: </label>
            <input 
            name="author"
            type="text" 
            placeholder="Write"
            />
            
            <br/> 

            <label>Edition Year: </label>
            <input
            name="yearOfPublication" 
            type="text" 
            placeholder="1995"
            />

            <br/>
            

            <label>Source Image: </label>
            <input
            name="url" 
            type="text" 
            placeholder="https://www.yourimage.com/image.png"
            />

            <br/>

            <label>Description: </label>
            <textarea
            name="description" 
            type="text" 
            placeholder="Description..."
            />

            <br/> 

            <label>ISBN: </label>
            <input
            name="isbn" 
            type="text" 
            placeholder="Optional"
            />

            <br/>

            

        </form>
            <Link to={`/`}><button className="btn-xxl">Accept</button></Link>
            <Link to={`/detail-book/${id}`}><button className="btn-xxl">Cancel</button></Link>
        </div>
        
    )
}

export default Update;
