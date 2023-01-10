import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeftCircle } from "react-icons/fi";
import "./UserDetails.css";

const UserDetails = ({ user }) => {
  return (
    <div className="UserDetails-cont">
      <div className="UserDetails">
        <div className="UserDetails-img-cont">
          <img
            className="UserDetails-img"
            src={user.picture.large}
            alt={`${user.name.title} ${user.name.first} ${user.name.last}`}
          />
        </div>
        <p className="UserDetails-name">{`${user.name.title} ${user.name.first} ${user.name.last}`}</p>
        <p className="UserDetails-job">Web Developer</p>
        <p className="UserDetails-description">
          Lorem, ipsum dolor sit amet consectetur
          <span className="UserDetails-usersname">{` ${user.login.username}`}</span>
          . Amet, dolorem Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Amet, dolorem
        </p>
        <p className="UserDetails-email">{user.email}</p>
      </div>

      <Link to="/users" className="UserDetails-btn">
        <FiArrowLeftCircle size={20} className="UserDetails-btn-icon" /> Back to
        users
      </Link>
    </div>
  );
};

export default UserDetails;
