import { useState } from "react";

const FlashCard = ({question, answer}) => {

    const [flipped, setFlipped] = useState(true);

    const flippHandler = () => {
        setFlipped(!flipped)
    }

    return ( 
        <>
        
        <section className="" onClick={flippHandler}>
        {flipped ? <h2>{question}</h2> : <h2>{answer}</h2> }
        </section>
        
        </>
     );
}
 
export default FlashCard;