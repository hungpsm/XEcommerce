import React from "react";
import { Link } from "react-router-dom";
import user from "images/user2.png";
import "components/Header/Header.scss";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <div className="logo"> ReactJS 2021 </div>
      </Link>

      <div className="user">
        <div className="user-image">
          <img src={user} alt="user" />
        </div>
        <p className="user-name"> nnkhanhhung@gmail.com </p>
      </div>
    </div>
  );
}

export default Header;
