import React from 'react';
import student1 from '../../../images/student1.png'
import student2 from '../../../images/student2.png'
import student3 from '../../../images/student3.png'
import student4 from '../../../images/student4.png'
import student5 from '../../../images/student5.png'
import student6 from '../../../images/student6.png'
import './PhotoAlbum.css'

const PhotoAlbum = () => {
    // Our Students photo album section
    return (
        <div className='container mt-5'>
            <h1 className='services-title mt-3 mb-2 '>My Students </h1>
            <hr style={{ width: '35%', margin: '0  auto' }} className='mb-4' />
            <div className='row'>
                <div className="col-lg-4 col-12 mb-3">
                    <img className='img-fluid  img-size' src={student1} alt="" />
                </div>
                <div className="col-lg-4 col-12 mb-3">
                    <img className='img-fluid  img-size' src={student2} alt="" />
                </div>
                <div className="col-lg-4 col-12 mb-3">
                    <img className='img-fluid  img-size' src={student3} alt="" />
                </div>
            </div>
            <div className='row'>
                <div className="col-lg-4 col-12 mb-3">
                    <img className='img-fluid img-size' src={student4} alt="" />
                </div>
                <div className="col-lg-4 col-12 mb-3">
                    <img className='img-fluid img-size' src={student5} alt="" />
                </div>
                <div className="col-lg-4 col-12 mb-3">
                    <img className='img-fluid img-size' src={student6} alt="" />
                </div>
            </div>
        </div>
    );
};

export default PhotoAlbum;