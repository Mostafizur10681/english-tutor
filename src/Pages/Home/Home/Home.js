import React from 'react';
import Banner from '../Banner/Banner';
import PhotoAlbum from '../PhotoAlbum/PhotoAlbum';
import Services from '../Services/Services';
import './Home.css'

const Home = () => {
    return (
        // Home Page
        <div>
            <Banner></Banner>
            <Services></Services>
            <PhotoAlbum></PhotoAlbum>
        </div>
    );
};

export default Home;