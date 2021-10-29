import axios from "axios";
import './BookAdder.css';


const BookAdder = () => {

    const api ="http://localhost:7000/api/Bookshelf/books";

    const addBook=()=>{
        var author=document.getElementById("author").value;
        var publishYear=document.getElementById("publishYear").value;
        var rating=document.getElementById("rating").value;
        var imageUrl=document.getElementById("imageUrl").value;
        var isFinished=document.getElementById("isFinished").value;

    
        console.log("Adding book")

        axios.post(api,{
            "author":author,
            "rating":rating,
            "is_finished":isFinished,
            "publish_year":publishYear,
            "image_url":imageUrl,
        });
     }


    return (
        <div>
            <button onClick={addBook}>Add Book</button>
            <input id="author" placeholder='Author'/>
            <input id="publishYear" placeholder='Publish Year'/>
            <input id="rating" placeholder='Rating (0-5)'/>
            <input id="imageUrl" placeholder='Image URL'/>
            <input id="isFinished" placeholder='Is the book finished? (Y/N)'/>
        </div>
    )
}

export default BookAdder
