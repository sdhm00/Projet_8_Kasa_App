import "../../styles/styles.css"
import PropTypes from 'prop-types'

function Rating({ rating }) {
    return (
        <div className="logement-stars">
        <i class="fa-solid fa-star active-stars"></i>
        <i class="fa-solid fa-star active-stars"></i>
        <i class="fa-solid fa-star active-stars"></i>
        <i class="fa-solid fa-star inactive-stars"></i>
        <i class="fa-solid fa-star inactive-stars"></i>
      </div>
    )
}

Rating.propTypes = {
    rating: PropTypes.string,
}
 
export default Rating