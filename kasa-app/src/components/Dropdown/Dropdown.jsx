import React, { useState } from 'react';
import "../../styles/styles.css"

const Dropdown = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="dropdown">
            <div className="dropdown-toggle" onClick={toggleDropdown}>
                <h2>{title}</h2>
                <i className={`fa-solid fa-chevron-${isOpen ? 'down' : 'up'}`} id="about-vector"></i>
            </div>
            {isOpen && (
                <div className="dropdown-content">
                    {content}
                </div>
            )}
        </div>
    );
};

export default Dropdown;
