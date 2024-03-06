import img2 from "../../assets/img2.png"
import "../../styles/styles.css"
import { useState, useEffect } from 'react';
import About from "./About.json";
import PropTypes from 'prop-types';

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
              <h1>{about.title}</h1>
              <i className="fa-solid fa-chevron-up" id="about-vector"></i>
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