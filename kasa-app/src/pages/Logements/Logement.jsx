import "../../styles/styles.css"
import img3 from "../../assets/img3.png"
import imgMobile from "../../assets/imgcarrousel.png"

function LogementsPage() {
    return (
      <div className="logement-block">
        <div className="logement-carousel">
          <i className="fa-solid fa-chevron-left" id="arrow-left"></i>
          <img src={img3} alt="Logement img" className="logement-img" />
          <img src={imgMobile} alt="Logement img mobile" className="logement-img-mobile" />
          <p className="carousel-txt">1/4</p>
          <i className="fa-solid fa-chevron-right" id="arrow-right"></i>
        </div>
        <div className="description-block">
          <div className="logement-description">
            <div className="logement-title">
              <h1>Cozy loft on the Canal Saint-Martin</h1>
              <p>Paris, Île-de-France</p>
            </div>
            <div className="logement-tag">
              <p>Cozy</p>
              <p>Canal</p>
              <p>Paris</p>
            </div>
          </div>
          <div className="logement-rating">
            <div className="logement-host">
              <p>Alexandre <br/> Dumas</p>
              <div className="host-picture"></div>
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
              <p>Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à1 station de la gare de l'est (7 minutes à pied). </p>
            </div>
            <div className="block-text">
              <div className="description-buttons">
                <h2>Équipements</h2>
                <i className="fa-solid fa-chevron-up" id="about-vector"></i>
              </div>
              <p>Climatisation <br />Wi-Fi <br />Cuisine <br />Espace de travail <br />Fer à repasser <br />Sèche-cheveux <br />Cintres</p>
            </div>
          </div>
        </div>
    );
  }
  
  export default LogementsPage;