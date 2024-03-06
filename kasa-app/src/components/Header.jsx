import logo from "../assets/logo.png"
import "../styles/styles.css"
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
    <nav className="nav-block">
      <img src={logo} alt="Kasa-Header-logo" />
      <div className="navigation">
        <NavLink to="/" className={({isActive }) => (isActive ? "active" : "")}>Acceuil</NavLink>
        <NavLink to="/about" className={({isActive }) => (isActive ? "active" : "")}>A Propos</NavLink>
      </div>
    </nav>
  </header>
  );
}

export default Header;