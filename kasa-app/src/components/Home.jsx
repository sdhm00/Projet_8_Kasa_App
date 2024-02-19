import img1 from "../assets/img1.png"
import "../styles/styles.css"
import { Link } from "react-router-dom"
import Logements from "../pages/Logements/logement.json";

function Home() {
  console.log(Logements)
  return (
    <div>
      <div className="bloc">
        <div className="img-block">
          <img src={img1} alt="img home page" className="img" />
          <div className="img-background">
            <p id="img-txt">Chez vous, partout et ailleurs</p>
          </div>
        </div>
        <div className="logement-background">
          <div className="logement">
            <Link to="/logement">
              <div className="cards-background">
                <p>Titre de la <br/>location</p>
              </div>
            </Link>
            <Link to="/logement">
              <div className="cards-background">
                <p>Titre de la <br/>location</p>
              </div>
            </Link>
            <Link to="/logement">
              <div className="cards-background">
                <p>Titre de la <br/>location</p>
              </div>
            </Link>
          </div>
          <div className="logement">
            <Link to="/logement">
              <div className="cards-background">
                <p>Titre de la <br/>location</p>
              </div>
            </Link>
            <Link to="/logement">
              <div className="cards-background">
                <p>Titre de la <br/>location</p>
              </div>
            </Link>
            <Link to="/logement">
              <div className="cards-background">
                <p>Titre de la <br/>location</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;