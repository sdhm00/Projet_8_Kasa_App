import "../../styles/styles.css"
import Logements from "../Logements/Logement.json";
import { useParams, Navigate } from 'react-router-dom';
import Tags from "../../components/Logement-Page/Tags";
import Carrousel from "../../components/Carrousel/Carrousel";
import Rating from "../../components/Logement-Page/Rating";
import Equipments from "../../components/Logement-Page/Equipments";
import Description from "../../components/Logement-Page/Description";

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
            <Description description={logement.description}/>
            <Equipments equipments={logement.equipments}/>
          </div>
        </div>
    );
  }

export default LogementsPage;