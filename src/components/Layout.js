import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";

import "./Layout.css";

const Layout = (props) => {
  const [showMenu, setShowMenu] = React.useState(true);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <section className="Layout">
      <div className="MainNav">
        <nav className="navigation">
          <ul>
            <li>
              <NavLink to="/home">Homepage</NavLink>
            </li>
            <li>
              <NavLink to="/users">Users</NavLink>
            </li>
            <li>
              {" "}
              <NavLink to="/errorBoundary">Error Boundary</NavLink>
            </li>
          </ul>
          <NavLink className="sign-in-btn" to="/sign-in">
            Sign In
          </NavLink>
        </nav>
      </div>
      <div className="menu-icons">
        {showMenu ? (
          <AiOutlineMenu onClick={toggleMenu} size={20} className="icon" />
        ) : (
          <FaTimes onClick={toggleMenu} size={20} className="icon" />
        )}
      </div>
      <nav
        className={`Layout-mobile-nav ${
          showMenu && "Layout-mobile-nav-display"
        }`}
      >
        <ul>
          <NavLink to="/home" onClick={closeMenu}>
            Homepage
          </NavLink>
          <NavLink to="/users" onClick={closeMenu}>
            Users
          </NavLink>
          <NavLink to="/errorBoundary" onClick={closeMenu}>
            Error Boundary
          </NavLink>
          <NavLink to="/sign-in" onClick={closeMenu}>
            SignIn
          </NavLink>
        </ul>
      </nav>
      <div className="Layout-content">{props.children}</div>
    </section>
  );
};

export default Layout;
