import React, {useState, useEffect} from 'react';
import './SingleSelect.scss';

const SingleSelect = props => {

    /*

        This component is built for you. Just skin it with the scss file. See the example.png. 

        Suggestions:
            rollover states on buttons.
            staging animations.
            make feedback a modal window.

    */

    const [selected, setSelected] = useState(-1);

    const handleSelect = (i) => {
        if(selected === -1) setSelected(i)
    }

    const selectedOption = props.data.options[selected]

    return (
        <div className={`SingleSelect`}>
            <h1 className={`question-header`}>
                {props.data.questionText}
            </h1>
            {
                selected === -1 &&
                props.data.options.map((option, optionIndex) => {
                    return <button onClick={()=>{handleSelect(optionIndex)}}>{option.selection}. {option.text}</button>
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

export default SingleSelect