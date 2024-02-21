import "../../styles/styles.css"
import PropTypes from 'prop-types'

function Host({ name, picture }) {
    return (
        <div className="logement-host">
            <p>{name}</p>
            <div className="host-picture">{picture}</div>
        </div>
    )
}

Host.propTypes = {
    name: PropTypes.string,
    picture: PropTypes.string,
}
 
export default Host