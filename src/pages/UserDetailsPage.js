import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import { useErrorHandler } from 'react-error-boundary';
import UserDetails from '../components/UserDetails'
import '../components/UserDetails.css';

const UserDetailsPage = () => {
    const [user, setUser] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [httpError, setHttpError] = React.useState(null);

    const params = useParams();
    const { page, id } = params;

    const handleError = useErrorHandler();

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch(`https://randomuser.me/api/?page=${page}&results=8&seed=abc`);
                const data = await response.json();
                const userDetails = data?.results.find(user => user.login.uuid === id);
                setLoading(false);
                setUser(userDetails);
            } catch (error) {
                setLoading(false);
                setHttpError(error.message);
                handleError(error);
            }
        };

        fetchData();

    }, [page, id, handleError])
    return (
        <>
            <Helmet>
                <title>User Details</title>
                <meta name='description' content='Check here to see individual user details' />
                <link rel='canonical' href='/users/id' />
            </Helmet>
            <Layout>
                {
                    !loading && httpError && <h1>{httpError}</h1>
                }
                {
                    loading && !httpError && <div className='loader-container'>
                        <div class="loading-ellipsis"><div></div><div></div><div></div><div></div></div></div>
                }
                {!loading && !httpError && user && (
                    <UserDetails user={user} />
                )
                }
            </Layout>
        </>
    )
}

export default UserDetailsPage;
