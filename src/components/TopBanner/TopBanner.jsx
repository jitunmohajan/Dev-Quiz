import React from 'react';
import './TopBanner.css';
import Carousel from 'react-bootstrap/Carousel';
const TopBanner = () => {
    return (

        <div>
          
                <img
                className="d-block w-100"
                src="../../../public/bg-1.jpg"
                alt="First slide"
                />
                <Carousel.Caption>
                <h2 className=''>Dev-Quiz is an interactive learning platform</h2>
                {/* <p className='bg-primary'>offering high-quality coding courses in various programming languages</p> */}
                </Carousel.Caption>
           
      
        </div>
        // <div className='top-banner'>
        //     <h2 className='text text-center'>Dev-Quiz is an interactive learning platform </h2>
        //     <img src="../../../public/bg-1.jpg" alt=""></img>
        // </div>
    );
};

export default TopBanner;