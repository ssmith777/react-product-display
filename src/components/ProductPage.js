import React from 'react';
import Showcase from './Showcase';
import Overlay from './Overlay';
import Footer from './Footer';

import Lightbox from './Lightbox';

const ProductPage = () => {
  return (
    <div>
      <Showcase />
      <Overlay />
      <Lightbox />
      <Footer />
    </div>
  );
};

export default ProductPage;
