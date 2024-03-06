import "../../styles/styles.css"
import PropTypes from 'prop-types'
import { useState, useEffect } from 'react';

function Rating({ rating }) {
    const activeStars = Math.floor(rating);

    return (
        <div className="logement-stars">
            {[...Array(5)].map((_, index) => (
                <i
                    key={index}
                    className={`fa-solid fa-star ${
                        index < activeStars ? 'active-stars' : 'inactive-stars'
                    }`}
                ></i>
            ))}
        </div>
    )
}

Rating.propTypes = {
    rating: PropTypes.number.isRequired
};

export default Rating