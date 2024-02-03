import logo from "../assets/logo.png"

function Header() {
  return (
    <div>
      <header>
        <nav>
          <img src={logo} alt="Kasa-Header-logo" />
          <div>
            <p>Acceuil</p>
            <p>A Propos</p>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;