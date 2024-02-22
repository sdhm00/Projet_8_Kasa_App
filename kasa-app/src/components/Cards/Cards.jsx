import "../../styles/styles.css"
import { Link } from "react-router-dom"
import PropTypes from 'prop-types'

function Card({ cover, title }) {
    return (
        <Link to="/logement">
            <div className="cards-background">
                <img src={cover} alt="Logements cover" />
                <span>
                    <p>{title}</p>
                </span>
            </div>
        </Link>
    )
}

Card.propTypes = {
    title: PropTypes.string,
    cover: PropTypes.string,
}
 
export default Card