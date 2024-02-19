import { createElement } from "react";
import Logements from "../../pages/Logements/Logement.json";
import "../../styles/styles.css"
import { Link } from "react-router-dom"

function Card(Logements) {
    const cardImg = document.createElement("img")
    const cardTitle = document.createElement("p")
    
    for (let i = 0; i < Logements.length; i++) {
        cardImg.src = Logements[i].cover
        cardTitle.innerText = Logements[i].title

        return (
            <div className="cards-background">
                {cardImg}
                {cardTitle}
            </div>
        )
    }
}
 
export default Card