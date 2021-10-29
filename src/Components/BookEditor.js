import axios from "axios";
import { useState } from "react";

const BookEditor = ({id,author,publishYear,imageUrl, isFinished, rating}) => {

    const api ="http://localhost:7000/api/Bookshelf/books";

    const[stars,updateRating]=useState(rating);
    const[finished,updateFinished]=useState(isFinished);
    
    const editBook=()=>{
        updateRating(document.getElementById("r1").value);
        updateFinished(document.getElementById("f1").value);

        console.log("Editing book");

        axios.put(api+'/'+id,{
            "author":author,
            "rating":stars,
            "is_finished":finished,
            "publish_year":publishYear,
            "image_url":imageUrl,
        });
     }


    return (
        <div>
            <input id="r1" placeholder='Rating (0-5)' />
            <input id="f1" placeholder='Is the book finished? (Y/N)' />
            <br/>
            <button onClick={editBook}>Change</button>
        </div>
    )
}

export default BookEditor
