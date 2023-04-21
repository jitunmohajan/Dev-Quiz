import React from 'react';

import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';
const Quiz = () => {
    const quiz = useLoaderData().data;
    console.log(quiz.questions.length);
    return (
        <div>
           {
                quiz.questions.map((question,indx) => <Question key={question.id} question={question} questionNumber={indx+1}></Question> )
           } 
        </div>
    );
};

export default Quiz;