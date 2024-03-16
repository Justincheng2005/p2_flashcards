import { useState } from 'react'
import Flashcard from './components/Flashcard.jsx'
import cardArray from './cardArray.jsx'
import './App.css'

function App() {
  const [index, setIndex] = useState(0);

  const [currentCard, setCurrentCard] = useState({
      name: "press next to start",
      text: "click to flip",
      flip: false
  })

  const [flipped, setFlipped] = useState(false);

  const [guess, setGuess] = useState("");

  const [correctGuess, setCorrectGuess] = useState(null);

  //index lag
  const nextCard = () => {
    if(currentCard.name == "press next to start"){
      setCurrentCard({
        name: cardArray[0].name,
        text: cardArray[0].definition,
        flip: flipped
      });
      setIndex(0);
    }
    else if(index==8){
      setCurrentCard({
        name: cardArray[0].name,
        text: cardArray[0].definition,
        flip: flipped
      });
      setIndex(0);
    }
    else{
      setCurrentCard({
        name: cardArray[index+1].name,
        text: cardArray[index+1].definition,
        flip: flipped
      });
      setIndex(index+1);
    }
    setFlipped(false);
    setGuess("");
    setCorrectGuess(null);
  }
  const prevCard = () => {
    if(index==0){
      setCurrentCard({
        name: cardArray[8].name,
        text: cardArray[8].definition,
        flip: flipped
      })
      setIndex(8);
    }else{
      setCurrentCard({
        name: cardArray[index-1].name,
        text: cardArray[index-1].definition,
        flip: flipped
      })
      setIndex(index-1);
    }
    setFlipped(false);
    setGuess("");
    setCorrectGuess(null);
  }

  const clicked = () => {
    flipped ? setFlipped(false) : setFlipped(true);
  }

  const checkGuess = () => {
    if(guess==currentCard.name){
      setCorrectGuess(true);
    }
    else{
      setCorrectGuess(false);
    }
  }

  const handleChange = (e) => {
    setGuess(e.target.value)
  }

  return (
    <>
      <div className='header'>
        <h1>Data Structures Review</h1>
        <h3>Test your knowledge and review popular data structures </h3>  
        <h5>Total Cards: 9</h5>                  
      </div>
      <button type="flashcard" className='flash-button' onClick={clicked}>
        <Flashcard
          name = {currentCard.name}
          text = {currentCard.text}
          flip = {flipped}
       />
      </button>
      <div className='guess-container'>
        <div className='label'>
          Enter your guess here: 
        </div>
        <input id="guess" name="guess" value={guess} onChange={handleChange} className='guess-container-input'>
        </input>
        <button type='submit' className='guess-button' onClick={checkGuess}>
          Check
        </button>
        <div>
          {correctGuess==null ? "": correctGuess? guess+" is correct": "incorrect, try again"}
        </div>
      </div>
      <div className='diffcard-container'>
      <button type='go_back' className='back-button' onClick={prevCard}>
          back
      </button>
      <button type='go_next' className='next-button' onClick={nextCard}>
          next
      </button>
      </div>
    </>
  )
}

export default App
