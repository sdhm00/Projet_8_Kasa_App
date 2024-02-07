import logo from "../assets/logo2.png"
import "../styles/styles.css"

function Footer() {
    return (
        <footer className="box">
            <img src={logo} alt="Kasa-Footer-logo" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}
  
export default Footer;