import Card from "../../components/Cards"
import Logement from "./logement.json"

function Logs() {
    console.log(Logement)
    return (
        <div>
            <h1>Home</h1>
            {Logement.map((profile, index) => (
                <Card
                    key={`${profile.name}-${index}`}
                    picture={profile.picture}
                    title={profile.name}
                />
            ))}
        </div>
    )
}


export default Logs;