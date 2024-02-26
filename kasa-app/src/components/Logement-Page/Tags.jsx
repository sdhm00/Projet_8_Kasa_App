import "../../styles/styles.css"

function Tags({ tags }) {
    return (
        <div className="logement-tag">
        {tags.map((tag,index) =>
            <p key={index}>{tag}</p>
        )}
        </div>
    )
}
 
export default Tags