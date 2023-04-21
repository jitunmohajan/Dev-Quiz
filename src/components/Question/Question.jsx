import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Option from '../Option/Option';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'



const Question = ({question,questionNumber}) => {
    const options=question.options;
    const [showAnswer,setShowAnswer] = useState(true);

    const checkAnswer = (e) =>{
        console.log(e.target.value);
        if(e.target.value === question.correctAnswer){
            toast("Correct Answer !");
        }else{
            toast('Wrong answer');
        }
    }

    return (
        <div>

           

            <Card className='mt-5 mx-auto' style={{ width: '80%' }}>
            <ToastContainer />
                <div className='d-flex align-items-center justify-content-between p-3'>
                    <h4 className='ms-3'>{questionNumber} . {question.question}</h4>
                    <FontAwesomeIcon onClick={()=>setShowAnswer(!showAnswer)}  icon={ showAnswer ? faEye: faEyeSlash } />
                </div>
                <ListGroup variant="flush">
                    {
                        options.map((option,indx) => <Option key={indx} option={option} optionNumber={indx} questionNumber={questionNumber} checkAnswer={checkAnswer}></Option> )
                    }
                    
                    {
                        showAnswer? '' : <div className='ps-3 text-success' ><p>Answer: {question.correctAnswer}</p></div>
                    }
                </ListGroup>

            </Card>
        </div>
    );
};

export default Question;