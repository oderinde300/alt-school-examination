import React from 'react';
import Auth from '../components/Auth';
import { Helmet } from 'react-helmet-async';

const AuthPage = () => {
    return (
        <>
            <Helmet>
                <title>Sign In</title>
                <meta name='description' content='Sign in to see users' />
                <link rel='canonical' href='/sign-in' />
            </Helmet>
            <Auth />
        </>
    )
}

export default AuthPage;
