import React  from "react";

import { Link } from "react-router-dom";
import logo from "./logo.png";
import "./Header.css";

function Header() {

  return (
    <div className="header">
      <div>
        <Link style={{ textDecoration: "none", color: "white" }} to={"/home"}>
          <img src={logo} alt='logo'/>
        </Link>
      </div>
      <div className="navigation">
        <div className="link">
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to={"/participants-list"}
          >
            List of Participants
          </Link>
        </div>
        <div className="link">
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to={"/add-participant"}
          >
            Add participant
          </Link>
        </div>
        <div className="link">
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to={"/send-email"}
          >
            Send Email
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
