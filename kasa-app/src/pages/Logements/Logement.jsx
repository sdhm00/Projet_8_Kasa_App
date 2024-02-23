import "../../styles/styles.css"
import Logements from "../Logements/Logement.json";
import { useParams } from 'react-router-dom';

function LogementsPage() {
  const { id } = useParams();

  // Find the logement with the matching id
  const logement = Logements.find(item => item.id === id);

  if (!logement) {
      return <div>Logement not found</div>;
  }
    return (
      <div className="logement-block">
        <div className="logement-carousel">
          <i className="fa-solid fa-chevron-left" id="arrow-left"></i>
          <img src={logement.cover} alt="Logement img" className="logement-img" />
          <p className="carousel-txt">1/4</p>
          <i className="fa-solid fa-chevron-right" id="arrow-right"></i>
        </div>
        <div className="description-block">
          <div className="logement-description">
            <div className="logement-title">
              <h1>{logement.title}</h1>
              <p>{logement.location}</p>
            </div>
            <div className="logement-tag">
              <ul>{logement.tags}</ul>
            </div>
          </div>
          <div className="logement-rating">
            <div className="logement-host">
              <p>{logement.host.name}</p>
              <img className="host-picture" src={logement.host.picture}/>
            </div>
            <div className="logement-stars">
              <i class="fa-solid fa-star active-stars"></i>
              <i class="fa-solid fa-star active-stars"></i>
              <i class="fa-solid fa-star active-stars"></i>
              <i class="fa-solid fa-star inactive-stars"></i>
              <i class="fa-solid fa-star inactive-stars"></i>
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