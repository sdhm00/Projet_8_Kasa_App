import "../../styles/styles.css"
import PropTypes from 'prop-types'

function Equipments({ equipments }) {
    return (
        <div className="dropdown-block">
            {equipments.map((equipment,index) =>
                <p key={index}>{equipment}</p>
            )}
        </div>
    )
}

Equipments.propTypes = {
    equipments: PropTypes.string,
}
 
export default Equipments