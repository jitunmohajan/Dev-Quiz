import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
const Option = ({option,optionNumber,questionNumber,checkAnswer}) => {
    return (
        <ListGroup.Item>
            <input onClick={checkAnswer} className='' type="radio" name={`group${questionNumber}`} id={`group-${questionNumber}-${optionNumber}`} value={option}/>
            <label htmlFor={`group-${questionNumber}-${optionNumber}`}>{option}</label>
        </ListGroup.Item>
    );
};

export default Option;