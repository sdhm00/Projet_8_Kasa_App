

function Card({ title, cover }) {
    return (
        <div>
            <img src={cover} alt="freelance" />
            <span>{title}</span>
        </div>
    )
}
 
export default Card