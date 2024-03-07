import React, { useState } from 'react';
import PropTypes from 'prop-types';
import "../../styles/styles.css"

function Dropdown({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <div className='dropdown-button' onClick={toggleDropdown}>
        <h1>{title}</h1>
        <i className={`fa-solid fa-chevron-${isOpen ? 'down' : 'up'}`} id="about-vector"></i>
      </div>
      {isOpen && <div>{children}</div>}
    </div>
  );
}

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Dropdown;
