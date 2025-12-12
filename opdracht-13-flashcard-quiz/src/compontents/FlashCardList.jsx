import data from "../data.js";
import FlashCard from "./Flashcard.jsx";

const FlashCardList = () => {
    return ( 
    <>
    <section>
        <h1 className="">Flashcard List</h1>
        {data.map(d => (
            <FlashCard question={d.question} answer={d.answer} />
        ))}
    </section>
    </> );
}
 
export default FlashCardList;





// wat moet lukasz doen?

// lukasz moet de steden importeren uit een javascript bestand genaamd data
// lukasz moet de flashcard component importeren en dan een map() functie aanmaken zodat elke stad netjes is ingeladen,. 












































// lukasz is een sukkel hahahahhaahahah