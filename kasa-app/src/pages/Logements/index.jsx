import Card from "../../components/Cards"

function Logs() {
    return (
        <div>
            <h1>Home</h1>
            {freelanceProfiles.map((profile, index) => (
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