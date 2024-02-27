import "../../styles/styles.css"
import Logements from "../Logements/Logement.json";
import { useParams, Navigate } from 'react-router-dom';
import Tags from "../../components/Logement-Page/Tags";
import Carrousel from "../../components/Carrousel/Carrousel";
import Rating from "../../components/Logement-Page/Rating";

function LogementsPage() {
  const { id } = useParams();

  const logement = Logements.find(item => item.id === id);

  if (!logement) {
    return <Navigate to="/error" />;
  }
    return (
      <div className="logement-block">
        <Carrousel pictures={logement.pictures}/>
        <div className="description-block">
          <div className="logement-description">
            <div className="logement-title">
              <h1>{logement.title}</h1>
              <p>{logement.location}</p>
            </div>
            <Tags tags={logement.tags}/>
          </div>
          <div className="logement-rating">
            <div className="logement-host">
              <p>{logement.host.name}</p>
              <img className="host-picture" src={logement.host.picture}/>
            </div>
            <div className="logement-stars">
              <Rating rating={logement.rating}/>
            </div>
          </div>
        </div>
          <div className="description-text">
            <div className="block-text">
              <div className="description-buttons">
                <h2>Description</h2>
                <i className="fa-solid fa-chevron-up" id="about-vector"></i>
              </div>
              {/* <p>{description}</p> */}
            </div>
            <div className="block-text">
              <div className="description-buttons">
                <h2>Équipements</h2>
                <i className="fa-solid fa-chevron-up" id="about-vector"></i>
              </div>
              {/* <p>{equipements}</p> */}
            </div>
          </div>
        </div>
    );
  }

export default LogementsPage;