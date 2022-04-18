import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div className='w-100' style={{ height: '300px' }}>
            <Spinner animation="border" variant="info" />
        </div>
    );
};

export default Loading;