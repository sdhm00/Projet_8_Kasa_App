import "../../styles/styles.css"
import PropTypes from 'prop-types'

function Description({ description }) {
    return (
        <div className="dropdown-block">
            <p>{description}</p>
        </div>
    )
}

Description.propTypes = {
    description: PropTypes.string,
}
 
export default Description