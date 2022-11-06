import React from 'react';
import './User.css';


const User = ({ image, name, email, onClick }) => {
    return (
        <div className='User' onClick={onClick}>
            <img src={image} alt={name} className='User-img' />
            <div className='User-text'>
                <p className='User-name'>{name}</p>
                <p className='User-email'>{email}</p>
            </div>
        </div>
    )
}

export default User;
