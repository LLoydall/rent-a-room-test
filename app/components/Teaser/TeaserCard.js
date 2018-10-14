/**
 *
 * Teaser
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'rebass';

const TeaserCard = ({ children, css, href, ...props }) => (
  <a href={href}>
    <Card
      m={4}
      backgroundSize="cover"
      borderRadius={8}
      color="white"
      css={{
        height: '250px',
        overflow: 'hidden',
        position: 'relative',
        transition: 'box-shadow .5s',
        '&:hover': {
          boxShadow: '0 2px 5px rgba(0, 0, 0, .25)',
        },
        ...css,
      }}
      {...props}
    >
      {children}
    </Card>
  </a>
);

TeaserCard.propTypes = {
  children: PropTypes.array,
  css: PropTypes.object,
  href: PropTypes.string,
};

export default TeaserCard;
