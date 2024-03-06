import img1 from "../../assets/img1.png"
import "../../styles/styles.css"
import Logements from "../Logements/Logement.json";
import Card from "../../components/Cards/Cards";

function Home() {
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
            {Logements.map((logement, index) => (
              <Card
                key={`${logement.name}-${index}`}
                cover={logement.cover}
                title={logement.title}
                id={logement.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;