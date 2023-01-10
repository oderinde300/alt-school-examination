import React from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";
import "./Home.css";

const Home = () => {
  return (
    <Layout>
      <section className="Home">
        <div className="Home-text">
          <h1>
            Welcome! to <br></br>ALT/SOE/022/2628 <br></br> Exam Question 4
            Solution
          </h1>
          <Link to="/users" className="users-btn">
            Click to load users
          </Link>
        </div>
        <div className="Home-img-cont">
          <img
            className="Home-img"
            src="https://images.unsplash.com/photo-1586936893354-362ad6ae47ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="random"
          />
        </div>
      </section>
    </Layout>
  );
};

export default Home;
