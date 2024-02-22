import "../../styles/styles.css"
import PropTypes from 'prop-types'

function LogLocation({ location }) {
    return (
        <p>{location}</p>
    )
}

LogLocation.propTypes = {
    location: PropTypes.string,
}
 
export default LogLocation