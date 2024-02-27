import logo from "../assets/logo.png"
import "../styles/styles.css"
import { Link, useLocation } from "react-router-dom"
import { useState, useEffect } from 'react'

function Header() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("/");

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  return (
    <header className="header">
    <nav className="nav-block">
      <img src={logo} alt="Kasa-Header-logo" />
      <div className="navigation">
        <Link to="/" className={activeLink === "/" ? "active" : ""}>Acceuil</Link>
        <Link to="/about" className={activeLink === "/about" ? "active" : ""}>A Propos</Link>
      </div>
    </nav>
  </header>
  );
}

export default Header;