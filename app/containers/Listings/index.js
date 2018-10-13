/**
 *
 * Listings
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Heading, Flex } from 'rebass';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectListings from './selectors';
import reducer from './reducer';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
export class Listings extends React.Component {
  render() {
    return (
      <Flex>
        <Helmet>
          <title>Listings</title>
          <meta name="description" content="Description of Listings" />
        </Helmet>
        <Heading>Listings</Heading>
      </Flex>
    );
  }
}

Listings.propTypes = {
  // dispatch: PropTypes.func.isRequired,
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
