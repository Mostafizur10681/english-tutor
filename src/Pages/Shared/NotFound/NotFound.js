import React from 'react';
import notFound from '../../../images/notFound.png'
const NotFound = () => {
    return (
        <div className='container mt-5'>
            <h1 className=' text-center' style={{ color: 'rgb(75, 131, 133)' }}>Oh Nooooo It is not Availabe!!</h1>
            <h3 className='text-center'>404</h3>
            <img className='mx-auto d-block img-fluid' src={notFound} alt="" />
        </div>
    );
};

export default NotFound;