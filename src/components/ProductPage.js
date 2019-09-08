import React from 'react';
import Showcase from './Showcase';
import Overlay from './Overlay';
import Footer from './Footer';
import Gallery from './Gallery';
import Lightbox from './Lightbox';

const ProductPage = () => {
  return (
    <div>
      <Showcase />
      <Overlay />
      {/* <Gallery /> */}
      <Lightbox />
      <Footer />
    </div>
  );
};

export default ProductPage;
