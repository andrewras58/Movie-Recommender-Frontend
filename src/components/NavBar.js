import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/NavBar.scss";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
      <Link to="/" className="nav-header" onClick={() => {setMenuOpen(false)}}>Reel Resemblance</Link>
      <div className="menu" onClick={() => {setMenuOpen(!menuOpen)}}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <Link to="/wow">wow</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
