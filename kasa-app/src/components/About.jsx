import img2 from "../assets/img2.png"
import "../styles/Pages/About/index.css"

function About() {
  return (
    <div className="about-block">
      <div className="img-block">
        <img src={img2} alt="img page à propos" className="img2"/>
      </div>
      <div className="info-block">
        <button className="about-buttons">Flabilité</button>
        <button className="about-buttons">Respect</button>
        <button className="about-buttons">Service</button>
        <button className="about-buttons">Sécurité</button>
      </div>
    </div>
  );
}

export default About;