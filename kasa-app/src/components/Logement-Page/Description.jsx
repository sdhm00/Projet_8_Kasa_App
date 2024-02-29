import "../../styles/styles.css"
import PropTypes from 'prop-types'
import Dropdown from "../Dropdown/Dropdown"
import { useState, useEffect } from 'react';

function Description({ description }) {
    const [rotated, setRotated] = useState(false);

    const handleRotate = () => {
      setRotated(!rotated);
    };

    return (
        <div className="block-text">
            <div className="description-buttons">
                <h2>Description</h2>
                <i className={`fa-solid fa-chevron-up ${rotated ? 'rotated' : ''}`} id="about-vector" onClick={handleRotate}></i>
            </div>
            <div className="dropdown-block">
                <p>{description}</p>
            </div>
        </div>
    )
}

Description.propTypes = {
    description: PropTypes.string,
}
 
export default Description