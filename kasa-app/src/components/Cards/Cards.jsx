import "../../styles/styles.css"
import { Link } from "react-router-dom"
import PropTypes from 'prop-types'

function Card({ cover, title, id }) {
    return (
        <Link to={`/logement/${id}`}>
            <div className="cards-background">
                <img src={cover} alt="Logements cover" />
                <span className="card-span">
                    <p>{title}</p>
                </span>
            </div>
        </Link>
    )
}

Card.propTypes = {
    title: PropTypes.string,
    cover: PropTypes.string,
    id: PropTypes.string,
}
 
export default Card