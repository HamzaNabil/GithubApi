import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
class Navbar extends Component {
  render() {
    const { user } = this.props;
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-2">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Github Api
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <NavLink to="/" className="nav-item nav-link">
                Home
              </NavLink>
              {!user ? (
                <a
                  className="nav-item nav-link"
                  href="https://github.com/login/oauth/authorize?client_id=45ab9329affa31b75695"
                >
                  Sign In
                </a>
              ) : (
                <NavLink className="nav-item nav-link" to="/logout">
                  Logout
                </NavLink>
              )}
            </ul>
            {localStorage.getItem("username") && (
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active nav-link">
                  <span> Welcome {localStorage.getItem("username")} </span>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    );
  }
}
export default Navbar;
