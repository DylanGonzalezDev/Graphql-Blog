import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  useEffect(() => {
    if (!token) {
      console.log("este es el token " + token);
      const list = document.getElementById("list");
      const item = document.querySelector("#logout");
      list?.removeChild(item);
      console.log("Logged out");
    } else {
      console.log("token desde navbar " + token)
    }
  }, [token]);

  const logout = async () => {
    localStorage.removeItem("token");
    setToken("");
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light p-4">
      <Link className="navbar-brand" to="/">
        ReactAndGraphQL
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto" id="list">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Messages
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/new-message">
              Create Message
            </Link>
          </li>
          
             <li className="nav-item" id="logout">
              <Link className="nav-link" to="/login" onClick={() => logout()}>
                Logout
              </Link>
            </li> 
          
        </ul>
      </div>
    </nav>
  );
};
