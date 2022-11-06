import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeftCircle } from 'react-icons/fi';
import './UserDetails.css';

const UserDetails = ({ user }) => {
    return (
        <>
            <div className='UserDetails-cont'>
                <div className='UserDetails'>
                    <img className='UserDetails-img'
                        src={user.picture.large} alt={`${user.name.title} ${user.name.first} ${user.name.last}`} />
                    <h1>{`${user.name.title} ${user.name.first} ${user.name.last}`}</h1>
                    <p>Age: {user.dob.age}</p>
                    <p>Gender: {user.gender}</p>
                    <p>PhoneNo: {user.phone}</p>
                    <p>Email: {user.email}</p>
                    <p>Address: {`${user.location.street.number} ${user.location.street.name} ${user.location.city} ${user.location.state} 
    ${user.location.country}, ${user.location.postcode}`}</p>
                </div>
            </div>

            <Link to='/users' className='UserDetails-btn'>
                <FiArrowLeftCircle size={20} className='UserDetails-btn-icon' /> Back to users
            </Link>
        </>
    )
}

export default UserDetails;
