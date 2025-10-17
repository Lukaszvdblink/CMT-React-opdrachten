import { useState } from "react";

const Book = ({image, title, author}) => {
    const [aantalKeerGelezen, setAantalKeerGelezen] = useState(0);
    function  verhoogTeller() {
        setAantalKeerGelezen(aantalKeerGelezen + 1)
    }
    return (
 <section className="book-container">
<img src={image} alt=""  className="image"/>
<h2>{title}</h2>
<h3>{author}</h3>
<button onClick={verhoogTeller}>
Keer gelezen: {aantalKeerGelezen}
</button>
</section>

    );
}



export default Book;
