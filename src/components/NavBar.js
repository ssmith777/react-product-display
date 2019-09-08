import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// Come back and add array for links to NavBar
const NavBar = ({ logoName }) => {
  return (
    <nav className='navbar'>
      <div className='container'>
        <h1 className='logo'>{logoName}</h1>
        <ul className='nav'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
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
