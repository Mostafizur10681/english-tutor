import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { id, name, img, description, price } = service;

    const navigate = useNavigate();

    const handleServiceNavigate = name => {
        navigate(`/checkout`)
    }
    return (
        <div className='service'>
            <img className='image' src={img} alt="" />
            <h2 className='text my-2 '>{name}</h2>
            <h5 className='price'>Price: ${price}</h5>
            <p className='description'><small>{description}</small></p>
            <button onClick={() => handleServiceNavigate(name)} className='btn button'>Book: {name}</button>
        </div>
    );
};

export default Service;