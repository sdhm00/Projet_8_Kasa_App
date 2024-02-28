import "../../styles/styles.css"
import PropTypes from 'prop-types'

function Description({ description }) {
    return (
        <div className="block-text">
            <div className="description-buttons">
                <h2>Description</h2>
                <i className="fa-solid fa-chevron-up" id="about-vector"></i>
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