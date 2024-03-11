import img2 from "../../assets/img2.png"
import "../../styles/styles.css"
import About from "./About.json";
import PropTypes from 'prop-types';
import Dropdown from "../../components/Dropdown/Dropdown";

function Aboutinfos() {
  return (
    <div className="about-block">
      <div className="img-block">
        <img src={img2} alt="img page à propos" className="img"/>
        <p className="img-background"></p>
      </div>
      <div className="info-block">
        <div className="about-infos">
          {About.map((about) => (
            <div className="about-buttons">
              <Dropdown title={about.title}>
                <div className="about-txt">
                  <p>{about.text}</p>
                </div>
              </Dropdown>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

Aboutinfos.propTypes = {
  title: PropTypes.string,
}

export default Aboutinfos;