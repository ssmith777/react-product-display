import React, { Component, Fragment } from 'react';
import ReactBnbGallery from 'react-bnb-gallery';
import { Link } from 'react-router-dom';

const photos = [
  {
    photo: 'https://i.ibb.co/CHLBZnp/gal2323.jpg',
    caption: 'Jam out in style..',
    subcaption: 'Jamming',
    thumbnail: 'https://i.ibb.co/CHLBZnp/gal2323.jpg',
    id: 1
  },
  {
    photo: 'https://i.ibb.co/4pBbhfY/gal39834.jpg',
    caption: 'Sleek style and color...',
    subcaption: 'Sleek Design',
    thumbnail: 'https://i.ibb.co/4pBbhfY/gal39834.jpg',
    id: 2
  },
  {
    photo: 'https://i.ibb.co/xSnHP7g/gal43884.jpg',
    caption: 'Classic leather design...',
    subcaption: 'Stylish Leather',
    thumbnail: 'https://i.ibb.co/xSnHP7g/gal43884.jpg',
    id: 3
  },
  {
    photo: 'https://i.ibb.co/QN6Bnrb/gal4958.jpg',
    caption: 'Matches Apple and Windows products...',
    subcaption: 'Apple White',
    thumbnail: 'https://i.ibb.co/QN6Bnrb/gal4958.jpg',
    id: 4
  },
  {
    photo: 'https://i.ibb.co/dGZvj75/gal4545.jpg',
    caption: 'Kid approved...',
    subcaption: 'Rugged Design',
    thumbnail: 'https://i.ibb.co/dGZvj75/gal4545.jpg',
    id: 5
  },
  {
    photo: 'https://i.ibb.co/S6FVFNt/gal74744.jpg',
    caption: 'Clean cut and sleek...',
    subcaption: 'Sleek',
    thumbnail: 'https://i.ibb.co/S6FVFNt/gal74744.jpg',
    id: 6
  }
];

class LightBox extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      galleryOpened: false,
      photoid: 0
    };
    this.toggleGallery = this.toggleGallery.bind(this);
  }

  toggleGallery = photoid => {
    this.setState(prevState => ({
      galleryOpened: !prevState.galleryOpened,
      photoid
    }));
  };

  render() {
    return (
      <Fragment>
        <div className='section-c'>
          <div className='gallery'>
            <Link
              to=''
              onClick={() => {
                this.toggleGallery(1);
              }}
              className='big'
            >
              <img src='https://i.ibb.co/CHLBZnp/gal2323.jpg' alt='' />
            </Link>
            <Link
              to=''
              onClick={() => {
                this.toggleGallery(2);
              }}
              className='big'
            >
              <img src='https://i.ibb.co/4pBbhfY/gal39834.jpg' alt='' />
            </Link>
            <Link
              to=''
              onClick={() => {
                this.toggleGallery(3);
              }}
              className='big'
            >
              <img src='https://i.ibb.co/xSnHP7g/gal43884.jpg' alt='' />
            </Link>
            <Link
              to=''
              onClick={() => {
                this.toggleGallery(4);
              }}
              className='big'
            >
              <img src='https://i.ibb.co/QN6Bnrb/gal4958.jpg' alt='' />
            </Link>
            <Link
              to=''
              onClick={() => {
                this.toggleGallery(5);
              }}
              className='big'
            >
              <img src='https://i.ibb.co/dGZvj75/gal4545.jpg' alt='' />
            </Link>
            <Link
              to=''
              onClick={() => {
                this.toggleGallery(6);
              }}
              className='big'
            >
              <img src='https://i.ibb.co/S6FVFNt/gal74744.jpg' alt='' />
            </Link>
          </div>
        </div>
        <ReactBnbGallery
          show={this.state.galleryOpened}
          photos={photos}
          onClose={this.toggleGallery}
          activePhotoIndex={this.state.photoid - 1}
        />
      </Fragment>
    );
  }
}
export default LightBox;
