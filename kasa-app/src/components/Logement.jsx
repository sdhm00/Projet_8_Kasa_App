import "../styles/styles.css"
import img3 from "../assets/img3.png"

function Logement() {
    return (
      <div className="logement-block">
        <div className="logement-carousel">
          <i className="fa-solid fa-chevron-left" id="arrow-left"></i>
          <img src={img3} alt="Logement img" className="logement-img" />
          <p className="carousel-txt">1/4</p>
          <i className="fa-solid fa-chevron-right" id="arrow-right"></i>
        </div>
      </div>
    );
  }
  
  export default Logement;