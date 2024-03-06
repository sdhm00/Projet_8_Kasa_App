import "../../styles/styles.css"
import PropTypes from 'prop-types'
import Dropdown from "./Dropdown";

function DropdownLogements({description, equipments}) {
    return (
        <div className="description-text">
            <div className="block-text">
                <div className="description-buttons">
                    <Dropdown title="Description">
                        <p>{description}</p>
                    </Dropdown>
                </div>
            </div>
            <div className="block-text">
                <div className="description-buttons">
                    <Dropdown title="Equipements">
                        {equipments.map((equipment,index) =>
                            <p key={index}>{equipment}</p>
                        )}
                    </Dropdown>
                </div>
            </div>
        </div>
    )
}

DropdownLogements.propTypes = {
    description: PropTypes.string,
    equipments: PropTypes.string,
}
 
export default DropdownLogements