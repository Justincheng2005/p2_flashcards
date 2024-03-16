import {useState} from 'react'

const Flashcard = (props) => {
    
    return(
        <div className='card-content'>
            {props.flip ? props.name : props.text}
        </div>
    )
}

export default Flashcard;