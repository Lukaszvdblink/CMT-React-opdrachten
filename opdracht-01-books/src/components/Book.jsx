const Book = ({image, title, author}) => {
    return (
 <section className="book-container">
<img src={image} alt=""  className="image"/>
<h2>{title}</h2>
<h3>{author}</h3>
</section>

    );
}

export default Book;
