import React from 'react';
import PropTypes from 'prop-types';

const Overlay = ({ h3title, h2text, paragraph }) => {
  return (
    <section className='section-b'>
      <div className='overlay'>
        <div className='section-b-inner'>
          <h3>{h3title}</h3>
          <h2>{h2text}</h2>
          <p>{paragraph}</p>
        </div>
      </div>
    </section>
  );
};

Overlay.defaultProps = {
  h3title: 'Loud and Clear',
  h2text: "People Arn't Hearing All The Music",
  paragraph:
    ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo architecto debitis modi cum dolorum doloribus explicabo amet ullam rerum consequuntur.'
};

Overlay.propTypes = {
  h3title: PropTypes.string.isRequired,
  h2text: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired
};

export default Overlay;
