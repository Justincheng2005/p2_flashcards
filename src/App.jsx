import { useState } from 'react'
import Flashcard from './components/Flashcard.jsx'
import cardArray from './cardArray.jsx'
import './App.css'

function App() {
  const [currentCard, setCurrentCard] = useState({
    name:"Press the next button if you are ready to start",
    text:"flip this",
  })
  const [flipped, setFlipped] = useState(false);

  const newCard = () => {
    let index = Math.floor(Math.random()*cardArray.length);
    setFlipped(false);
    setCurrentCard({
      name: cardArray[index].name,
      text: cardArray[index].definition,
      flip: flipped
    })
  }

  const clicked = () => {
    flipped ? setFlipped(false) : setFlipped(true)
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
      {console.log("hi")}
      <div className='diffcard-container'>
        <button type='go_next' className='next-button' onClick={newCard}>
          next
        </button>
      </div>
    </>
  )
}

export default App
