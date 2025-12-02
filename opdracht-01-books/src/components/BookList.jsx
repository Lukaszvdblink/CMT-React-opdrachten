
import Book from "./Book"
import { useState } from "react";
import BookCounter from "./BookCounter";
import booksData from '../booksData.js'

const Booklist = () => {


    const [books, setBooks] = useState(booksData);
    const [searchInput, setsearchInput] = useState('')
  const searchHandler = (e) => {
    let newSearch = e.target.value
    setsearchInput(newSearch)

      const filteredBooks = booksData.filter((book) =>
   
    book.title.toLowerCase().includes(searchInput.toLowerCase())
    


    
  )
  setBooks(filteredBooks)
  };



 



    return (
<>
     <div>
        <input type="text" placeholder="zoek hier uw boek" name="search" onChange={searchHandler} />
     </div>


        <section className="container">
            <BookCounter aantal={books.length}/>
            {books.map((book)  => (
   <Book title={book.title} author={book.author} image={book.image} />

            ))}
            
            
        </section>

</>

    );
};

export default Booklist;

