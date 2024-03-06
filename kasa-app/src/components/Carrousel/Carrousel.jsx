import "../../styles/styles.css"
import { useState } from 'react'

function Carrousel({pictures}) {
    const [ slideIndex, setSlide ] = useState(0);

    const nextSlide = () => {
        setSlide(slideIndex === pictures.length - 1 ? 0 : slideIndex + 1)
    }
    
    const prevSlide = () => {
        setSlide(slideIndex === 0 ? pictures.length - 1 : slideIndex - 1)
    }

    const renderArrowsAndText = () => {
        if (pictures.length === 1) {
            return null;
        }
        return (
            <>
                <i className="fa-solid fa-chevron-left" id="arrow-left" onClick={prevSlide}></i>
                <span className="carousel-txt">{slideIndex + 1}/{pictures.length}</span>
                <i className="fa-solid fa-chevron-right" id="arrow-right" onClick={nextSlide}></i>
            </>
        );
    }

    return (
        <div className="logement-carousel">
            {renderArrowsAndText()}
            <img src={pictures[slideIndex]} alt="Carrousel img" className="logement-img"  />
        </div>
    )
}

export default Carrousel