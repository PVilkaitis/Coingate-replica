import React from "react";
import { Link } from "react-router-dom";

import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <Link to="/">
          <div className="logo"></div>
        </Link>

        <p>Products</p>
        <p>Resourses</p>
        <p>Buy Instantly</p>
      </div>

      <div className="header-right">
        <p>Log in</p>
        <div className="header-right-signup">
          <p>Sign up</p>
          <NavigateNextIcon style={{ fontSize: 20 }} />
        </div>
      </div>

      <div className="header-menu">
        <hr />
        <hr />
        <hr />
      </div>
    </div>
  );
};

export default Header;
