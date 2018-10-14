import React from 'react';

import PropTypes from 'prop-types';

const Photo = ({ alt, src, size, css, ...props }) => (
  <img
    src={src}
    style={{
      border: '1px solid white',
      width: size,
      height: `${size} !important`,
      ...css,
      borderRadius: size,
      transition: 'transform .5s',
      cursor: 'pointer',
    }}
    {...props}
    alt={alt}
  />
);

Photo.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string,
  css: PropTypes.object,
  size: PropTypes.string,
};

export default Photo;
