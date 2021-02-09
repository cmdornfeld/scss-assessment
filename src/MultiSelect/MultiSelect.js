import React, {useState, useEffect} from 'react'
import './MultiSelect.scss'

// this is a stub for you to develop the following

/*
    PART 2 - OPTIONAL 
    
    Develop a component similar to the single select that allows multiple options to be selected. 

    This will include an ability to toggle each option, and then click a submit button for grading.

    Grading will indicate visually on each option if it was correct or not. This implies 4 states for each button - selected and correct, selected and incorrect, not selected and correct, not selected and incorrect.

    The generic feedback shown in the data is binary - either you got it 100% correct and get the correct feedback, or you don't. 
*/

const MultiSelect = props => {

    const [selected, setSelected] = useState(-1);

    const handleSelect = (i) => {
        if(selected === -1) setSelected(i)
    }

    const selectedOption = props.data.options[selected]

    return (
        <div className={`MultiSelect`}>
            <h1>
                {props.data.questionText}
            </h1>
            {
                selected === -1 &&
                props.data.options.map((option, optionIndex) => {
                    return <button onClick={()=>{handleSelect(optionIndex)}}>{option.text}</button>
                })
            }
            {
                selected > -1 &&
                <div className={`feedback ${selectedOption.correct ? 'correct' : 'incorrect'}`}>
                    <h1>
                        {selectedOption.correct ?
                            props.data.feedback.correct.header
                        :
                            props.data.feedback.incorrect.header
                        }
                    </h1>
                    <p>
                        {selectedOption.correct ?
                            props.data.feedback.correct.body
                        :
                            props.data.feedback.incorrect.body
                        }
                    </p>
                    <button onClick={props.onComplete}>OK</button>
                </div>
            }
        </div>
    )
}

export default MultiSelect