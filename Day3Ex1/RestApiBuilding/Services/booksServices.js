import fs from 'fs/promises'
import _ from 'lodash'

 
const getAllBooks=async()=>{
    const books= await fs.readFile('/Users/krantd/Desktop/Node_Training/Day3Ex1/RestApiBuilding/Database/books.json')
    return JSON.parse(books);
}
const getBooksByAuthor=async(author)=>{
    const books= await getAllBooks()
    const booksByAuthor= _.find(books,(item)=>{return item.author===author})
     return (booksByAuthor)
}
const deleteBooksByAuthor=async(author)=>{
    let books= await fs.readFile('/Users/krantd/Desktop/Node_Training/Day3Ex1/RestApiBuilding/Database/books.json')
     let booksToBeDeleted=_.filter(books, (item)=>{return item.author===author});
     return booksToBeDeleted;
}
const addBooks=async(data)=>{
   let books= await getAllBooks();
   let updatedBooks=books.push(data);
   return updatedBooks;
}
export {getAllBooks,getBooksByAuthor,deleteBooksByAuthor}
