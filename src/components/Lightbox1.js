import React, { useState } from 'react';

import Lightbox from 'react-image-lightbox';

import 'react-image-lightbox/style.css';

const images = {
  '1': [
    '//placekitten.com/1500/500',
    '//placekitten.com/4000/3000',
    '//placekitten.com/800/1200',
    '//placekitten.com/1500/1500'
  ],
  '2': [
    '//placekitten.com/1000/1200',
    '//placekitten.com/600/1000',
    '//placekitten.com/800/1200'
  ]
};

const lighboxes = ['1', '2'];

function LightboxDisplay() {
  const [isOpen, setIsOpen] = useState(0);
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <div className='section-c'>
      <div className='gallery'>
        {lighboxes.map(item => (
          <div key={item}>
            <a
              href='https://i.ibb.co/CHLBZnp/gal2323.jpg'
              key={item}
              onClick={() => setIsOpen(item)}
            >
              <img src='https://i.ibb.co/CHLBZnp/gal2323.jpg' alt='' />
            </a>
            {/* <button type='button' key={item} onClick={() => setIsOpen(item)}>
              Open Lightbox {item}
            </button> */}
          </div>
        ))}
      </div>

      {!!isOpen && (
        <Lightbox
          mainSrc={images[isOpen][photoIndex]}
          nextSrc={images[isOpen][(photoIndex + 1) % images[isOpen].length]}
          prevSrc={
            images[isOpen][
              (photoIndex + images[isOpen].length - 1) % images[isOpen].length
            ]
          }
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex(
              (photoIndex + images[isOpen].length - 1) % images[isOpen].length
            )
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images[isOpen].length)
          }
        />
      )}
    </div>
  );
}

export default LightboxDisplay;
