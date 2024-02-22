import "../../styles/styles.css"
import PropTypes from 'prop-types'

function CarrouselImg({ pictures }) {
    return (
        <img src={pictures} alt="Logement img" className="logement-img" />
    )
}

CarrouselImg.propTypes = {
    pictures: PropTypes.string,
}
 
export default CarrouselImg