import img1 from "../assets/img1.png"
import "../styles/styles.css"
import { Link } from "react-router-dom"

function Home() {
  return (
    <div>
      <div className="bloc">
        <div className="img-block">
          <img src={img1} alt="img home page" className="img" />
          <p className="img-txt">Chez vous, partout et ailleurs</p>
        </div>
        <div className="logement-background">
          <div className="logement">
            <Link to="/logement">Titre de la <br/>location</Link>
            <Link to="/logement">Titre de la <br/>location</Link>
            <Link to="/logement">Titre de la <br/>location</Link>
          </div>
          <div className="logement">
            <Link to="/logement">Titre de la <br/>location</Link>
            <Link to="/logement">Titre de la <br/>location</Link>
            <Link to="/logement">Titre de la <br/>location</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;