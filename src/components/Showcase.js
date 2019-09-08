import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//overlay img in css needs to be changed to dynamic
const Showcase = ({ title, paragraph, linkText }) => {
  return (
    <section className='section-a'>
      <div className='container'>
        <div>
          <h1>{title}</h1>
          <p>{paragraph}</p>
          <Link className='btn' to='/about'>
            {linkText}
          </Link>
        </div>
        <img src='https://i.ibb.co/37Y74kv/showcase.jpg' alt='showcase' />
      </div>
    </section>
  );
};

Showcase.defaultProps = {
  title: 'The Headphones of the future',
  paragraph:
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus aliquid ratione quam reiciendis ipsa quae accusantium dicta optio nam iure?',
  linkText: 'Read More'
};
Showcase.propTypes = {
  title: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired
};

export default Showcase;
