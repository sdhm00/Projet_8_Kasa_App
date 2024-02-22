import "../../styles/styles.css"
import PropTypes from 'prop-types'

function LogTitle({ title }) {
    return (
        <h1>{title}</h1>
    )
}

LogTitle.propTypes = {
    title: PropTypes.string,
}
 
export default LogTitle