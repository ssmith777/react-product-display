import React from 'react';
import Showcase from './Showcase';
import Overlay from './Overlay';
import Footer from './Footer';
import Gallery from './Gallery';

const ProductPage = () => {
  return (
    <div>
      <Showcase />
      <Overlay />
      <Gallery />
      <Footer />
    </div>
  );
};

export default ProductPage;
