import React from 'react';
import { Card, Flex, Button } from 'rebass';
import PropTypes from 'prop-types';

const Overlay = ({ children = [], css, onButtonClick }) => (
  <Card
    width={1}
    bg="blackish"
    borderRadius={8}
    css={{
      position: 'relative',
      height: '100%',
      transform: 'translateX(100%)',
      transition: 'transform 1s',
      zIndex: 100,
      overflow: 'hidden',
      ...css,
    }}
  >
    <Flex
      width={1}
      flexWrap="wrap"
      justifyContent="space-around"
      alignItems="center"
      css={{ height: '100%', padding: '.5em' }}
    >
      {children}
    </Flex>
    <Button
      css={{
        position: 'absolute',
        padding: '.01em .8em .03em',
        bottom: 0,
      }}
      fontSize={20}
      borderRadius="0 8px 0 0"
      bg="salmon"
      onClick={onButtonClick}
    >
      &lt;
    </Button>
  </Card>
);

Overlay.propTypes = {
  children: PropTypes.array,
  css: PropTypes.object,
  onButtonClick: PropTypes.func,
};

export default Overlay;
