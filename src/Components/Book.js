import React from 'react'
import './Book.css'
import axios from 'axios'
import BookEditor from './BookEditor'

const Book = ({book}) => {

    const api ="http://localhost:7000/api/Bookshelf/books";

    const deleteBook=()=>{
        axios.delete(api+'/'+book.id)
    }



    return (
        <div className="bookCard">
        
        <button onClick={deleteBook}>Delete Listing</button>
          <img src={book.imageUrl} alt="Nothing available"/>  
          <p>Author: {book.author} </p>
          <p>Rating: {book.rating} </p>
          <p>Finished: {book.isFinished} </p>
          <p>Publish Year: {book.publishYear} </p>
          

        <BookEditor id={book.id} author={book.author} publishYear={book.publishYear} imageUrl={book.imageUrl} rating={book.rating} isFinished={book.isFinished}/>  
        </div>
    )
}

export default Book
