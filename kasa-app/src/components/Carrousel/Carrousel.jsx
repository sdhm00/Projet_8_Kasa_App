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

    return (
        <div className="logement-carousel">
            <i className="fa-solid fa-chevron-left" id="arrow-left" onClick={prevSlide}></i>
            {pictures.map((picture, index) => {
                return (
                    <img src={picture} alt="Carrousel img" key={index} className={slideIndex === index ? "logement-img":"logement-img img-hidden" }  />
                )
            })}
            <span className="carousel-txt">{slideIndex + 1}/{pictures.length}</span>
            <i className="fa-solid fa-chevron-right" id="arrow-right" onClick={nextSlide}></i>
        </div>
    )
}

export default Carrousel