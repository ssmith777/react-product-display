import React from 'react';
import PropTypes from 'prop-types';

// Come back and add array for links to NavBar
const NavBar = ({ logoName }) => {
  return (
    <nav className='navbar'>
      <div className='container'>
        <h1 className='logo'>{logoName}</h1>
        <ul className='nav'>
          <li>
            <a href='#home'>Home</a>
          </li>
          <li>
            <a href='#about'>About</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

NavBar.defaultProps = {
  logoName: 'Phono'
};

NavBar.propTypes = {
  logoName: PropTypes.string.isRequired
};

export default NavBar;
