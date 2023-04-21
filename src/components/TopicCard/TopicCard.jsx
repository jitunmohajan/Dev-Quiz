import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './TopicCard.css';
import { Link } from 'react-router-dom';
const TopicCard = ({topic}) => {
    const {id,name,logo,total}=topic;
    console.log(topic);
    return (
    
        <Card className='me-2 p-3 mb-5' style={{ width: '18rem' }}>
            <Card.Img className='background-color' variant="top" src={logo} />
            <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
               Total Question: {total}
            </Card.Text>
            <Link to={`quiz/${id}`}><Button variant="primary">Start Quiz</Button></Link>
            </Card.Body>
        </Card>
    );
};

export default TopicCard;