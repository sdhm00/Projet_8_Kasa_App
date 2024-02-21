import "../../styles/styles.css"
import PropTypes from 'prop-types'

function Tags({ tags }) {
    return (
        <div className="logement-tag">
            <p>Cozy</p>
            <p>Canal</p>
            <p>Paris</p>
        </div>
    )
}

Tags.propTypes = {
    title: PropTypes.string,
    cover: PropTypes.string,
}
 
export default Tags