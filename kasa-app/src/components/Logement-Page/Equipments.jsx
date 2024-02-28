import "../../styles/styles.css"
import PropTypes from 'prop-types'

function Equipments({ equipments }) {
    return (
        <div className="block-text">
            <div className="description-buttons">
              <h2>Équipements</h2>
              <i className="fa-solid fa-chevron-up" id="about-vector"></i>
            </div>
            <div className="dropdown-block">
            {equipments.map((equipment,index) =>
                <p key={index}>{equipment}</p>
            )}
            </div>
        </div>
    )
}

Equipments.propTypes = {
    equipments: PropTypes.string,
}
 
export default Equipments