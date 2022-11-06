import React from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';
import './Home.css';

const Home = () => {
    return (
        <Layout>
            <div className='Home'>
                <h1>Welcome! to ALT/SOE/022/2628 Exam Question 4 Solution</h1>
                <Link to='/users'>
                    Click to load users
                </Link>
            </div>
        </Layout>
    )
}

export default Home;
