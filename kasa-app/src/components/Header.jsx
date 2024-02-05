import logo from "../assets/logo.png"
import "../styles/Header/index.css"

function Header() {
  return (
      <header className="header">
        <nav className="nav-block">
          <img src={logo} alt="Kasa-Header-logo" />
          <div className="navigation">
            <p>Acceuil</p>
            <p>A Propos</p>
          </div>
        </nav>
      </header>
  );
}

export default Header;