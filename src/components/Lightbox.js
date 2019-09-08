import React, { Component, Fragment } from 'react';

import ReactBnbGallery from 'react-bnb-gallery';
import { Link } from 'react-router-dom';
const photos = [
  {
    photo: 'https://i.ibb.co/CHLBZnp/gal2323.jpg',
    // caption: 'Viñales, Pinar del Río, Cuba',
    // subcaption: 'Photo by Simon Matzinger on Unsplash',
    thumbnail: 'https://i.ibb.co/CHLBZnp/gal2323.jpg'
  },
  {
    photo: 'https://i.ibb.co/4pBbhfY/gal39834.jpg',
    // caption: 'La Habana, Cuba',
    // subcaption: 'Photo by Gerardo Sanchez on Unsplash',
    thumbnail: 'https://i.ibb.co/4pBbhfY/gal39834.jpg'
  },
  {
    photo: 'https://i.ibb.co/xSnHP7g/gal43884.jpg',
    // caption: 'Woman smoking a tobacco',
    // subcaption: 'Photo by Hannah Cauhepe on Unsplash',
    thumbnail: 'https://i.ibb.co/xSnHP7g/gal43884.jpg'
  },
  {
    photo: 'https://i.ibb.co/QN6Bnrb/gal4958.jpg',
    // caption: 'Woman smoking a tobacco',
    // subcaption: 'Photo by Hannah Cauhepe on Unsplash',
    thumbnail: 'https://i.ibb.co/QN6Bnrb/gal4958.jpg'
  },
  {
    photo: 'https://i.ibb.co/dGZvj75/gal4545.jpg',
    // caption: 'Woman smoking a tobacco',
    // subcaption: 'Photo by Hannah Cauhepe on Unsplash',
    thumbnail: 'https://i.ibb.co/dGZvj75/gal4545.jpg'
  },
  {
    photo: 'https://i.ibb.co/S6FVFNt/gal74744.jpg',
    // caption: 'Woman smoking a tobacco',
    // subcaption: 'Photo by Hannah Cauhepe on Unsplash',
    thumbnail: 'https://i.ibb.co/S6FVFNt/gal74744.jpg'
  }
];

class LightBox extends Component {
  constructor() {
    super(...arguments);
    this.state = { galleryOpened: false, photoid: 0 };
    this.toggleGallery = this.toggleGallery.bind(this);
  }

  toggleGallery = id => {
    this.setState(prevState => ({
      galleryOpened: !prevState.galleryOpened,
      photoid: id
    }));
  };

  render() {
    return (
      <Fragment>
        {/* <button onClick={this.toggleGallery}>Open photo gallery</button> */}
        <div className='section-c'>
          <div className='gallery'>
            <Link to='' onClick={this.toggleGallery} className='big'>
              <img src='https://i.ibb.co/CHLBZnp/gal2323.jpg' alt='' />
            </Link>
            <Link to='' onClick={this.toggleGallery} className='big'>
              <img src='https://i.ibb.co/4pBbhfY/gal39834.jpg' alt='' />
            </Link>
            <Link to='' onClick={this.toggleGallery} className='big'>
              <img src='https://i.ibb.co/xSnHP7g/gal43884.jpg' alt='' />
            </Link>
            <Link to='' onClick={this.toggleGallery} className='big'>
              <img src='https://i.ibb.co/QN6Bnrb/gal4958.jpg' alt='' />
            </Link>
            <Link to='' onClick={this.toggleGallery} className='big'>
              <img src='https://i.ibb.co/dGZvj75/gal4545.jpg' alt='' />
            </Link>
            <Link to='' onClick={this.toggleGallery} className='big'>
              <img src='https://i.ibb.co/S6FVFNt/gal74744.jpg' alt='' />
            </Link>
          </div>
        </div>
        <ReactBnbGallery
          show={this.state.galleryOpened}
          photos={photos}
          onClose={this.toggleGallery}
        />
      </Fragment>
    );
  }
}
export default LightBox;
