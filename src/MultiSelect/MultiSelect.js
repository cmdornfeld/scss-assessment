import React, {useState, useEffect} from 'react';
import './MultiSelect.scss';

// this is a stub for you to develop the following

/*
    PART 2 - OPTIONAL
    
    Develop a component similar to the single select that allows multiple options to be selected. 

    This will include an ability to toggle each option, and then click a submit button for grading.

    Grading will indicate visually on each option if it was correct or not. This implies 4 states for each button - selected and correct, selected and incorrect, not selected and correct, not selected and incorrect.

    The generic feedback shown in the data is binary - either you got it 100% correct and get the correct feedback, or you don't. 
*/

const MultiSelect = ({data, onComplete}) => {

    const [answers, setAnswers] = useState([]);
    const [step, setStep] = useState(-1);
    const [feedback, setFeedback] = useState(null);

    const handleAnswerSelection = (i) => {
        if(!answers.includes(data.options[i])){
            let newAnswers = [...answers, data.options[i]];
            setAnswers(newAnswers);
        } else {
            return answers;
        }
    }

    const checkAnswer = (answer) => {
        const correctAnswer = data.options.filter(option => {
            return option.correct === true;
        })
        const userAnswer = answers.filter(option => {
            return option.correct === true;
        })
        
        if (userAnswer.length === correctAnswer.length && answers.length === userAnswer.length){
            setStep(0);
            setFeedback('correct');
            return true;
        } else {
            setStep(0);
            setFeedback('incorrect')
            return false;
        }
    }

    return (
        <div className={`MultiSelect`}>
            <h1 className={`question-header`}>
                {data.questionText}
            </h1>
            {
                data.options.map((option, optionIndex) => {
                    return <button onClick={()=>{handleAnswerSelection(optionIndex)}} key={optionIndex}>{option.selection}. {option.text}</button>
                })
            }
            <button onClick={()=>{console.log(checkAnswer(answers))}}>Submit</button>
            {
                step > -1 &&
                <div className={`feedback ${feedback}`}>
                    <h1>
                        {feedback === 'correct' ?
                            data.feedback.correct.header
                        :
                            data.feedback.incorrect.header
                        }
                    </h1>
                    <p>
                        {feedback === 'correct' ?
                            data.feedback.correct.body
                        :
                            data.feedback.incorrect.body
                        }
                    </p>
                    <button onClick={onComplete}>OK</button>
                </div>
            }
        </div>
    )
}

export default MultiSelect