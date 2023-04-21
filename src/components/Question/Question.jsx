import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Option from '../Option/Option';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Question = ({question,questionNumber}) => {
    const options=question.options;
    const [answer,setAnswer] = useState(false);

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
                <h4 className='ms-3'>{questionNumber} . {question.question}</h4>
                <ListGroup variant="flush">
                    {
                        options.map((option,indx) => <Option key={indx} option={option} optionNumber={indx} questionNumber={questionNumber} checkAnswer={checkAnswer}></Option> )
                    }
                    
                </ListGroup>
            </Card>
        </div>
    );
};

export default Question;