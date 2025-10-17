
import Book from "./Book"
import { useState } from "react";
import BookCounter from "./BookCounter";

const Booklist = () => {


    const [books, setBooks] = useState([{
    title: "Harry Potter",
    author: "J.K. Rowling",
    image: './images/book-1.png',
    },
    {

    title: "Fantasia",
    author: "rafiq",
    image: './images/book-2.png',
    },
    {

    title: "Hunger games",
    author: "berkan",
    image: './images/book-3.png',
    },


])



    return (
        <section className="container">
            <BookCounter aantal={books.length}/>
            {books.map((book)  => (
   <Book title={book.title} author={book.author} image={book.image} />

            ))}
            
            
        </section>



    );
};

export default Booklist;

