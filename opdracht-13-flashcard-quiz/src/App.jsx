import './App.css'
import { useState } from 'react'
import FlashCard from './compontents/FlashCard';
import FlashCardList from './compontents/FlashCardList';

function App() {
  
  const [flipped, setFlipped] = useState(true);



  return (
    <>
      <h1>Opdracht 13 - Flashcard Quiz</h1>
 
    <FlashCardList/>


    </>
  )
}

export default App
