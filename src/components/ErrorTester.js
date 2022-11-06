import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';
import Layout from './Layout';
import { useErrorHandler } from 'react-error-boundary';
import './Users.css';

const User = React.lazy(() => import('./User'));

const ErrorTester = () => {
    const [page, setPage] = React.useState(1);
    const [data, setData] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [httpError, setHttpError] = React.useState(null);
    const pages = 10;

    const handleError = useErrorHandler();

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch(`https://randomuserssss.me/api/?page=${page}&results=7&seed=abc`);
                const data = await response.json();
                setLoading(false);
                setData(data.results);
            } catch (error) {
                setLoading(false);
                setHttpError(error.message);
                handleError(error);
            }
        }
        fetchData();
    }, [page, handleError]);

    return (
        <Layout>
            {
                !loading && httpError && <h1>{httpError}</h1>
            }
            {
                loading && !httpError && <div className='loader-container'>
                    <div class="loading-ellipsis"><div></div><div></div><div></div><div></div></div></div>
            }
            {!loading && data && data.map((user, index) => (
                <Link to={`/users/${page}/${user.login.uuid}`}>
                    <div>
                        <Suspense fallback={<div className='loader-container'>
                            <div class="loading-ellipsis"><div></div><div></div><div></div><div></div></div></div>}>
                            <User
                                key={user.login.uuid}
                                name={`${user.name.title} ${user.name.first} ${user.name.last}`}
                                email={user.email}
                                image={user.picture.medium}
                            />
                        </Suspense>
                    </div>
                </Link>
            ))
            }
            {
                !loading && !httpError && data && (
                    <>
                        <p className="pagination">
                            Pages: {page} of {pages}
                        </p>

                        <div className='User-actions'>

                            {

                                <button className='User-prev-btn'
                                    disabled={page <= 1}
                                    onClick={() => setPage((prev) => prev - 1)}
                                >
                                    <IoIosArrowRoundBack /> <span>prev</span>
                                </button>
                            }

                            {Array.from({ length: pages }, (value, index) => index + 1).map(
                                (each) => (
                                    <button className='User-btn' key={Math.random()} onClick={() => setPage(each)}>{each}</button>
                                )
                            )}
                            {
                                <button className='User-next-btn'
                                    disabled={page >= pages}
                                    aria-disabled={page >= pages}
                                    onClick={() => setPage((prev) => prev + 1)}
                                >
                                    <span>next</span> <IoIosArrowRoundForward />
                                </button>
                            }
                        </div>
                    </>
                )
            }

        </Layout>

    )
}

export default ErrorTester;
