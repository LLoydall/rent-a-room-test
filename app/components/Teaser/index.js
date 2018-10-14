/**
 *
 * Teaser
 *
 */

import React from 'react';
import { Box, Text } from 'rebass';
import PropTypes from 'prop-types';
import walk from 'images/walk-icon--black.svg';
import underground from 'images/underground-icon.svg';
import overground from 'images/overground-icon.svg';
import Overlay from './overlay';
import Photo from './photo';
import Vr from './divider';
import TeaserCard from './TeaserCard';

/* eslint-disable react/prefer-stateless-function */
class Teaser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hoverPhotos: false,
      overlay: false,
    };
  }
  setHoverPhotos(hoverPhotos) {
    this.setState({ hoverPhotos });
  }
  setOverlay(overlay) {
    this.setState({ overlay });
  }
  render() {
    const {
      area,
      featuredPhoto,
      photos,
      rentPerMonth,
      roomTitle,
      roommates,
      transport,
      uuid: listingId,
    } = this.props;

    return (
      <Box width={[1, 1 / 2, 1 / 3, 1 / 4]} css={{ padding: '1em' }}>
        <TeaserCard
          backgroundImage={`url(${
            photos.find(({ uuid }) => uuid === featuredPhoto).cdnUrl
          })`}
          css={{
            marginBottom: '.5em',
          }}
          href={`/listing/${listingId}`}
        >
          {roommates.map((person, i) => (
            <Photo
              src={person.profilePic.cdnUrl}
              css={{
                marginRight: '1em',
                right: `${i * 2}em`,
                bottom: '20px',
                zIndex: roommates.length - i,
                transform: `translateX(${
                  this.state.hoverPhotos ? 0 - i : 0
                }em)`,
                position: 'absolute',
              }}
              size="3em"
              onMouseEnter={() => {
                this.setHoverPhotos(true);
              }}
              onMouseLeave={() => {
                this.setHoverPhotos(false);
              }}
              onClick={e => {
                e.stopPropagation();
                e.preventDefault();
                this.setOverlay(true);
              }}
            />
          ))}
          <Overlay
            css={{ transform: `translateX(${this.state.overlay ? 0 : 100}%)` }}
            onButtonClick={e => {
              e.stopPropagation();
              e.preventDefault();
              this.setOverlay(false);
            }}
          >
            {roommates.map(person => (
              <Box css={{ padding: '5px', textAlign: 'center' }}>
                <a href={`/profile/${person.uuid}`}>
                  <Photo src={person.profilePic.cdnUrl} size="5em" />
                  <div>
                    <Text color="white" css={{ textDecoration: 'none' }}>
                      {person.firstName}
                    </Text>
                  </div>
                </a>
              </Box>
            ))}
          </Overlay>
        </TeaserCard>
        <Text fontSize={16} color="blackish">
          £{rentPerMonth}
          <Vr />
          {roomTitle}
        </Text>
        <Text fontSize={12}>
          {area}
          <Vr />
          <img
            src={walk}
            alt="walk"
            style={{ margin: '0 .5em', verticalAlign: 'middle' }}
          />
          {transport.distance.time}
          <img
            src={{ overground, underground }[transport.type]}
            alt={transport.type}
            style={{ margin: '0 .5em', verticalAlign: 'middle' }}
          />
          {transport.name}
        </Text>
      </Box>
    );
  }
}

Teaser.propTypes = {
  area: PropTypes.any,
  featuredPhoto: PropTypes.any,
  photos: PropTypes.any,
  rentPerMonth: PropTypes.any,
  roomTitle: PropTypes.any,
  roommates: PropTypes.any,
  transport: PropTypes.any,
  uuid: PropTypes.string,
};

export default Teaser;
