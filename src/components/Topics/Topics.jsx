import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TopicCard from '../TopicCard/TopicCard';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Topics = () => {
    const topics = useLoaderData().data;
    console.log(topics.length);
    return (

        <Row xs={1} md={2} lg={4} className="mt-5 justify-content-center">
           
                {
                    topics.map(topic=> <TopicCard key={topic.id} topic={topic}></TopicCard> )
                }
               
        </Row>
        
    );
};

export default Topics;