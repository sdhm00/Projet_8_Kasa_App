import "../../styles/styles.css"
import PropTypes from 'prop-types'

function Tags({ tags }) {
    return (
        <p>{tags}</p>
    )
}

Tags.propTypes = {
    tags: PropTypes.string,
}
 
export default Tags