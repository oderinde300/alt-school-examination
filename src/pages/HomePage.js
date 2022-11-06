import React from 'react';
import Home from '../components/Home';
import { Helmet } from 'react-helmet-async';


const HomePage = () => {
    return (
        <>
            <Helmet>
                <title>Home</title>
                <meta name='description' content='The Home Page' />
                <link rel='canonical' href='/home' />
            </Helmet>
            <Home />
        </>
    )
}

export default HomePage;
