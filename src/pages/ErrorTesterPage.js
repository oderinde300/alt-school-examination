import React from 'react';
import ErrorTester from '../components/ErrorTester';
import { Helmet } from 'react-helmet-async';

const ErrorTesterPage = () => {
    return (
        <>
            <Helmet>
                <title>ErrorTester</title>
                <meta name='description' content='The Error Testing Page' />
                <link rel='canonical' href='/errorBoundary' />
            </Helmet>
            <ErrorTester />
        </>
    )
}

export default ErrorTesterPage;
