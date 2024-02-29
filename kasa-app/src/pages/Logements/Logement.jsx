import "../../styles/styles.css"
import Logements from "../Logements/Logement.json";
import { useParams, Navigate } from 'react-router-dom';
import Tags from "../../components/Logement-Page/Tags";
import Carrousel from "../../components/Carrousel/Carrousel";
import Rating from "../../components/Logement-Page/Rating";
import DropdownLogements from "../../components/Dropdown/Dropdown-Logement";

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
            <div>
              <Rating rating={logement.rating}/>
            </div>
          </div>
        </div>
          <DropdownLogements logement={logement}/>
        </div>
    );
  }

export default LogementsPage;