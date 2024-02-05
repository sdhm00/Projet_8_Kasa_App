import img1 from "../../assets/img1.png"
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "../../styles/Pages/Home/index.css"

function App() {
  return (
    <div>
      <Header />
      <div className="bloc">
        <div className="img-block">
          <img src={img1} alt="img home page" className="img" />
          <p className="img-txt">Chez vous, partout et ailleurs</p>
        </div>
        <div className="logement-background">
          <div className="logement">
            <div className="logement-block">
              <p>Titre de la <br/>location</p>
            </div>
            <div className="logement-block">
              <p>Titre de la <br/>location</p>
            </div>
            <div className="logement-block">
              <p>Titre de la <br/>location</p>
            </div>
          </div>
          <div className="logement">
            <div className="logement-block">
              <p>Titre de la <br/>location</p>
            </div>
            <div className="logement-block">
              <p>Titre de la <br/>location</p>
            </div>
            <div className="logement-block">
              <p>Titre de la <br/>location</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;