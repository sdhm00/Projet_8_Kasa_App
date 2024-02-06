import logo from "../assets/logo.png"
import "../styles/Header/index.css"
import { Link } from "react-router-dom"

function Header() {
  return (
    <header className="header">
    <nav className="nav-block">
      <img src={logo} alt="Kasa-Header-logo" />
      <div className="navigation">
        <Link to="/">Acceuil</Link>
        <Link to="/about">A Propos</Link>
      </div>
    </nav>
  </header>
  );
}

export default Header;