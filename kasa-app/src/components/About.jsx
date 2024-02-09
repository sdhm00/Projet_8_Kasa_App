import img2 from "../assets/img2.png"
import "../styles/styles.css"

function About() {
  return (
    <div className="about-block">
      <div className="img-block">
        <img src={img2} alt="img page à propos" className="img"/>
        <p className="img-background"></p>
      </div>
      <div className="info-block">
        <div className="about-infos">
          <div className="about-buttons">
            <h1>Flabilité</h1>
            <i className="fa-solid fa-chevron-up" id="about-vector"></i>
          </div>
          <div className="about-txt">
            <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>
          </div>
        </div>
        <div className="about-infos">
          <div className="about-buttons">
            <h1>Respect</h1>
            <i className="fa-solid fa-chevron-up" id="about-vector"></i>
          </div>
          <div className="about-txt">
            <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
          </div>
        </div>
        <div className="about-infos">
          <div className="about-buttons">
            <h1>Service</h1>
            <i className="fa-solid fa-chevron-up" id="about-vector"></i>
          </div>
          <div className="about-txt">
            <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
          </div>
        </div>
        <div className="about-infos">
          <div className="about-buttons">
            <h1>Sécurité</h1>
            <i className="fa-solid fa-chevron-up" id="about-vector"></i>
          </div>
          <div className="about-txt">
            <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;