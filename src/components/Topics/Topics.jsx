import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TopicCard from '../TopicCard/TopicCard';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Topics = () => {
    const topics = useLoaderData().data;
    return (

        <div>
            <h2 className='ms-5 mt-5 mx-auto'>Programming Topics</h2>
            <Row xs={1} md={2} lg={4} className="mt-5 justify-content-center">
           
                    {
                        topics.map(topic=> <TopicCard key={topic.id} topic={topic}></TopicCard> )
                    }
                    
            </Row>
        </div>
        
    );
};

export default Topics;