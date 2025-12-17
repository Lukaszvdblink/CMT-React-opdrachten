import { useState } from "react";

const Book = ({ image, title, author, year, pages, description }) => {
    const [aantalKeerGelezen, setAantalKeerGelezen] = useState(0);
    function verhoogTeller() {
        setAantalKeerGelezen(aantalKeerGelezen + 1)
    }

    const [liked, setLiked] = useState(false);
    const toggleLike = (e) => {
        e.stopPropagation();
        setLiked(!liked)
    }

    const [isFlipped, setIsFlipped] = useState(false);
    function handleFlip() {
        setIsFlipped(!isFlipped)
    }

    return (
        <article
            className={`book ${isFlipped ? 'flipped' : ''}`}
            onClick={handleFlip}
        >
            <div className="book-inner">
                <div className="book-front">
                    <img src={image} alt="" className="image" />
                    <h2>{title}</h2>
                    <h3>{author}</h3>

                    <div>
                        <button onClick={toggleLike}>
                            {liked ? <h1>❤️</h1> : <h1>🤍</h1>}
                        </button>
                    </div>

                    <button onClick={verhoogTeller}>
                        Keer gelezen: {aantalKeerGelezen}
                    </button>
                </div>

                <div className="book-back">
                    <h2>Details:</h2>
                    <p>{year}</p>
                    <p>{pages}</p>
                    <p>{description}</p>
                </div>
            </div>
        </article>
    );
}

export default Book;
