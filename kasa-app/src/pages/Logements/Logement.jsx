import "../../styles/styles.css"
import Logements from "../Logements/Logement.json";
import Host from "../../components/Logement-Page/Host"

function LogementsPage() {
    return (
      <div className="logement-block">
        <div className="logement-carousel">
          <i className="fa-solid fa-chevron-left" id="arrow-left"></i>
          <img src={pictures} alt="Logement img" className="logement-img" />
          <p className="carousel-txt">1/4</p>
          <i className="fa-solid fa-chevron-right" id="arrow-right"></i>
        </div>
        <div className="description-block">
          <div className="logement-description">
            <div className="logement-title">
              <h1>{title}</h1>
              <p>{location}</p>
            </div>
            {Logements.map((logementTag, index) => (
                <Tags
                  key={`${logementTag.name}-${index}`}
                  tags={logementTag.tags}
                />
            ))}
          </div>
          <div className="logement-rating">
              {Logements.map((logementHost, index) => (
                <Host
                  key={`${logementHost.id}-${index}`}
                  name={logementHost.name}
                  picture={logementHost.picture}
                />
              ))}
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
              <p>{description}</p>
            </div>
            <div className="block-text">
              <div className="description-buttons">
                <h2>Équipements</h2>
                <i className="fa-solid fa-chevron-up" id="about-vector"></i>
              </div>
              <p>{equipements}</p>
            </div>
          </div>
        </div>
    );
  }

export default LogementsPage;