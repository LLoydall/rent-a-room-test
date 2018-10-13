/**
 *
 * Listings
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Heading, Flex, Box } from 'rebass';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectListings from './selectors';
import reducer from './reducer';
import saga from './saga';
import Teaser from '../../components/Teaser';
import loadListings from './actions';

/* eslint-disable react/prefer-stateless-function */
export class Listings extends React.Component {
  initialize() {
    loadListings();
  }
  render() {
    const { loading, error, listings } = this.props;
    return (
      <Flex flexDirection="column">
        <Helmet>
          <title>Listings</title>
          <meta name="description" content="Description of Listings" />
        </Helmet>
        <Box width={1}>
          <Heading textAlign="center">Listings</Heading>
        </Box>
        <Box width={1}>
          {(() => {
            if (loading) {
              return 'Finding Listings';
            } else if (error) {
              return 'Something went wrong';
            } else if (listings.length) {
              return listings.map(listing => <Teaser {...listing} />);
            }
            return 'No listings';
          })()}
        </Box>
      </Flex>
    );
  }
}

Listings.propTypes = {
  dispatch: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  error: PropTypes.any,
  listings: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({
  listings: makeSelectListings(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'listings', reducer });
const withSaga = injectSaga({ key: 'listings', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Listings);
