import "../../styles/styles.css"
import PropTypes from 'prop-types'
import Description from "../Logement-Page/Description";
import Equipments from "../Logement-Page/Equipments";
import { useState, useEffect } from 'react';

function Dropdown({logement}) {
    const [Rotated, setRotated] = useState(false);

    const handleRotate = () => {
        setRotated(prevRotated => !prevRotated);
    };

    return (
        <div className="description-text">
            <div className="block-text">
                <div className="description-buttons">
                    <h2>Description</h2>
                    <i className={`fa-solid fa-chevron-up ${descriptionRotated ? 'rotated' : ''}`} id="about-vector" onClick={handleDescriptionRotate}></i>
                </div>
                <div>
                    {descriptionRotated && (
                        <Description description={logement.description} />
                    )}
                </div>
            </div>
            <div className="block-text">
                <div className="description-buttons">
                    <h2>Equipements</h2>
                    <i className={`fa-solid fa-chevron-up ${equipmentsRotated ? 'rotated' : ''}`} id="about-vector" onClick={handleEquipmentsRotate}></i>
                </div>
                <div>
                    {equipmentsRotated && (
                        <Equipments equipments={logement.equipments} />
                    )}
                </div>
            </div>
        </div>
    )
}

Dropdown.propTypes = {
    logement: PropTypes.object.isRequired,
}
 
export default Dropdown