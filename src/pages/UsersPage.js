import React from 'react';
import Users from '../components/Users';
import { Helmet } from 'react-helmet-async';

const UsersPage = () => {
    return (
        <>
            <Helmet>
                <title>Users</title>
                <meta name='description' content='List of users' />
                <link rel='canonical' href='/users' />
            </Helmet>
            <Users />
        </>
    )
}

export default UsersPage;
