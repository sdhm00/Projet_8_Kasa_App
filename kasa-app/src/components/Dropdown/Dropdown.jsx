import "../../styles/styles.css"
import { useState, useEffect } from 'react';

function Dropdown() {
    const [rotated, setRotated] = useState(false);

    const handleRotate = () => {
      setRotated(!rotated);
    };

    return (
        <i className={`fa-solid fa-chevron-up ${rotated ? 'rotated' : ''}`} id="about-vector" onClick={handleRotate}></i>
    );
}
  
export default Dropdown;
