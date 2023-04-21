import React from 'react';
import './TopBanner.css';
import Carousel from 'react-bootstrap/Carousel';
const TopBanner = () => {
    return (

        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="/bg-1.jpg"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3 className='tex-white bg-primary'>Dev-Quiz is an interactive learning platform</h3>
                
                </Carousel.Caption>
            </Carousel.Item>
        
        </Carousel>
    );
};

export default TopBanner;