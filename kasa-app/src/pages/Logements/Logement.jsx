import "../../styles/styles.css"
import Logements from "../Logements/Logement.json";
import Host from "../../components/Logement-Page/Host"
import Tags from "../../components/Logement-Page/Tags"
import Location from "../../components/Logement-Page/Logement-location"
import Title from "../../components/Logement-Page/Logement-title"
import Rating from "../../components/Logement-Page/Rating"
import Pictures from "../../components/Logement-Page/CarrouselImg"

function LogementsPage() {
    return (
      <div className="logement-block">
        <div className="logement-carousel">
          <i className="fa-solid fa-chevron-left" id="arrow-left"></i>
            {Logements.map((logementPictures, index) => (
              <Pictures
                key={`logementPictures-${index}`}
                pictures={logementPictures.pictures}
              />
            ))}
          <p className="carousel-txt">1/4</p>
          <i className="fa-solid fa-chevron-right" id="arrow-right"></i>
        </div>
        <div className="description-block">
          <div className="logement-description">
            <div className="logement-title">
              {Logements.map((logementTitle, index) => (
                  <Title
                    key={`logementTitle-${index}`}
                    title={logementTitle.title}
                  />
              ))}
              {Logements.map((logementLocation, index) => (
                  <Location
                    key={`logementLocation-${index}`}
                    location={logementLocation.location}
                  />
              ))}
            </div>
            <div className="logement-tag">
              {Logements.map((logementTag, index) => (
                <Tags
                  key={`logementTag-${index}`}
                  tags={logementTag.tags}
                />
              ))}
            </div>
          </div>
          <div className="logement-rating">
              {Logements.map((logementHost, index) => (
                <Host
                  key={`logementHost-${index}`}
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