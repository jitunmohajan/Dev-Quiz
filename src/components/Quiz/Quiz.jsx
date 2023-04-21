import React from 'react';

import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';
import './Quiz.css';

const Quiz = () => {
    const quiz = useLoaderData().data;
    console.log(quiz);
    return (
        <div>
            <div className='quiz-title d-flex justify-content-center mt-3'>
                <img src={quiz.logo} alt="" />
                <h1>{quiz.name}</h1>
            </div>
           {
                quiz.questions.map((question,indx) => <Question key={question.id} question={question} questionNumber={indx+1}></Question> )
           } 
        </div>
    );
};

export default Quiz;