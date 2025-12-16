import { useState } from "react";

const Book = ({image, title, author}) => {
    const [aantalKeerGelezen, setAantalKeerGelezen] = useState(0);
    function  verhoogTeller() {
        setAantalKeerGelezen(aantalKeerGelezen + 1)
    }
    
    const [liked, setLiked] = useState(false);
    const toggleLike = () => {
        setLiked(!liked)
    }


    return (
 <section className="book-container">
<img src={image} alt=""  className="image"/>
<h2>{title}</h2>
<h3>{author}</h3>
<div>
    <button onClick={toggleLike}>{liked ? <h1>❤️</h1> : <h1>🤍</h1>}</button>
</div>
<button onClick={verhoogTeller}>
Keer gelezen: {aantalKeerGelezen}
</button>
</section>

    );
}



export default Book;
