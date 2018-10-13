/**
 *
 * Teaser
 *
 */

import React from 'react';
import { Box, Card } from 'rebass';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
class Teaser extends React.Component {
  render() {
    const {
      area,
      featuredPhoto,
      photos,
      // rentPerMonth,
      roomTitle,
      // roommates,
      transport,
    } = this.props;
    console.log(
      `url(${photos.find(({ uuid }) => uuid === featuredPhoto).cdnUrl})`,
    );
    return (
      <Box p={6}>
        <Card
          mb={4}
          style={{ height: '200px' }}
          p={4}
          py={6}
          backgroundImage={`url(${
            photos.find(({ uuid }) => uuid === featuredPhoto).cdnUrl
          })`}
          backgroundSize="cover"
          borderRadius={8}
          color="white"
          bg="darkgray"
        />
        {area} | {roomTitle} | {transport.name}
      </Box>
    );
  }
}

Teaser.propTypes = {
  area: PropTypes.any,
  featuredPhoto: PropTypes.any,
  photos: PropTypes.any,
  // rentPerMonth: PropTypes.any,
  roomTitle: PropTypes.any,
  // roommates: PropTypes.any,
  transport: PropTypes.any,
};

export default Teaser;
