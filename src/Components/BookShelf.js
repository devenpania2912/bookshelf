import './BookShelf.css';
import Book from './Book';
import {useState,useEffect} from 'react'
import axios from 'axios';
import BookAdder from './BookAdder';


const BookShelf = () => {
    
    const api ="http://localhost:7000/api/Bookshelf/books";


    const[books,updateBooks]=useState([]);
   
    useEffect(()=>{
        axios.get(api).then(res=>{
            updateBooks(res.data);
        })
    },[books])

    const filterBooks=()=>{
        updateBooks(books.filter(book=>book.isFinished=="Y"));
    }

    return (
        <div className="page">
            <h1 className="heading">Welcome to the Bookshelf</h1>
            <button onClick={filterBooks}>Filter Books (Will show only the ones which are finished)</button>
               <BookAdder id="AddBook"/>
            <div className="flexbox">
            { books.map((book)=>
            <Book book={book} />
            )} 
            </div>
        </div>
    )
}

export default BookShelf
