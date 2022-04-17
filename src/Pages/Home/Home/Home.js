import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import './Home.css'

const Home = () => {
    return (
        <div>
            <h1 className='text-center fw-bold  heading mt-3'>English Tutor</h1>
            <hr style={{ width: '30%', margin: '0  auto' }} className='mb-4' />
            <Banner></Banner>
            <Services></Services>
        </div>
    );
};

export default Home;