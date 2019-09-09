import React from 'react';
import Showcase from './Showcase';
import Overlay from './Overlay';
import Footer from './Footer';

import Lightbox from './Lightbox';
const photos = [
  {
    photo: 'https://i.ibb.co/CHLBZnp/gal2323.jpg',
    caption: 'Jam out in style..',
    subcaption: 'Jamming',
    thumbnail: 'https://i.ibb.co/CHLBZnp/gal2323.jpg',
    id: 0
  },
  {
    photo: 'https://i.ibb.co/4pBbhfY/gal39834.jpg',
    caption: 'Sleek style and color...',
    subcaption: 'Sleek Design',
    thumbnail: 'https://i.ibb.co/4pBbhfY/gal39834.jpg',
    id: 1
  },
  {
    photo: 'https://i.ibb.co/xSnHP7g/gal43884.jpg',
    caption: 'Classic leather design...',
    subcaption: 'Stylish Leather',
    thumbnail: 'https://i.ibb.co/xSnHP7g/gal43884.jpg',
    id: 2
  },
  {
    photo: 'https://i.ibb.co/QN6Bnrb/gal4958.jpg',
    caption: 'Matches Apple and Windows products...',
    subcaption: 'Apple White',
    thumbnail: 'https://i.ibb.co/QN6Bnrb/gal4958.jpg',
    id: 3
  },
  {
    photo: 'https://i.ibb.co/dGZvj75/gal4545.jpg',
    caption: 'Kid approved...',
    subcaption: 'Rugged Design',
    thumbnail: 'https://i.ibb.co/dGZvj75/gal4545.jpg',
    id: 4
  },
  {
    photo: 'https://i.ibb.co/S6FVFNt/gal74744.jpg',
    caption: 'Clean cut and sleek...',
    subcaption: 'Sleek',
    thumbnail: 'https://i.ibb.co/S6FVFNt/gal74744.jpg',
    id: 5
  }
];

const ProductPage = props => {
  return (
    <div>
      <Showcase />
      <Overlay />
      <Lightbox photos={photos} />
      <Footer />
    </div>
  );
};

export default ProductPage;
