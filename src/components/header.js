import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="masthead">
    <div>
      <div>
        <Link to="/">
          <h1 className="site-title">to-do app</h1>
        </Link>
      </div>
    </div>
  </header>
);

export default Header;
