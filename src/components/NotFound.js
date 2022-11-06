import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='NotFound'>
            <h1>Oops!</h1>
            <p>404 - PAGE NOT FOUND</p>
            <p>The Page you are looking for might have been removed or has its name changed</p>
            <Link to="/home" className='NotFound-btn'>
                GO TO HOMEPAGE
            </Link>
        </div>
    )
}

export default NotFound;
