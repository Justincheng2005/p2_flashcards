import {useState} from 'react'

const Flashcard = (props) => {
    
    return(
        <div className='card-content'>
            {props.flip ? props.text : props.name}
        </div>
    )
}

export default Flashcard;