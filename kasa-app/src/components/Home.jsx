import img1 from "../assets/img1.png"
import img3 from "../assets/img3.png"
import "../styles/styles.css"
import { Link } from "react-router-dom"

function Home() {
  return (
    <div>
      <div className="bloc">
        <div className="img-block">
          <img src={img1} alt="img home page" className="img" />
          <p className="img-txt img-background">Chez vous, partout et ailleurs</p>
        </div>
        <div className="logement-background">
          <div className="logement">
            <Link to="/logement">
              <div className="log-block">
                <img src={img3} alt="img logement" className="img-log"/>
                <div className="cards-background">
                  <p>Titre de la <br/>location</p>
                </div>
              </div>
            </Link>
            <Link to="/logement">
              <div className="log-block">
                <img src={img3} alt="img logement" className="img-log"/>
                <div className="cards-background">
                  <p>Titre de la <br/>location</p>
                </div>
              </div>
            </Link>
            <Link to="/logement">
              <div className="log-block">
                <img src={img3} alt="img logement" className="img-log"/>
                <div className="cards-background">
                  <p>Titre de la <br/>location</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="logement">
            <Link to="/logement">
              <div className="log-block">
                <img src={img3} alt="img logement" className="img-log"/>
                <div className="cards-background">
                  <p>Titre de la <br/>location</p>
                </div>
              </div>
            </Link>
            <Link to="/logement">
              <div className="log-block">
                <img src={img3} alt="img logement" className="img-log"/>
                <div className="cards-background">
                  <p>Titre de la <br/>location</p>
                </div>
              </div>
            </Link>
            <Link to="/logement">
              <div className="log-block">
                <img src={img3} alt="img logement" className="img-log"/>
                <div className="cards-background">
                  <p>Titre de la <br/>location</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;