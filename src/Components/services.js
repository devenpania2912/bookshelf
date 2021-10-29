import axios from "axios"


const api ="http://localhost:7000/api/Bookshelf/books"


const getBooks= async ()=>{
    await axios.get(api)
 }

 const getBookbyId= async (id)=>{
     await axios.get(api+'/'+id)
  }

 const createBook= async (book)=>{
     await axios.post(api,{  book
     })
 }

 const updateBook= async(id)=>{
     await axios.put(api+'/'+id,{
         "author":"Devy"

     })
 }

 const deleteBook= async(id)=>{
     await axios.delete(api+'/'+id)
 }
 