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
import {
  makeSelectListings,
  makeSelectLoading,
  makeSelectError,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import Teaser from '../../components/Teaser';
import { loadListings } from './actions';

/* eslint-disable react/prefer-stateless-function */
export class Listings extends React.Component {
  componentDidMount() {
    this.props.loadListings();
  }
  render() {
    const { loading, error, listings } = this.props;
    return (
      <Flex flexDirection="column">
        <Helmet>
          <title>Listings</title>
          <meta name="description" content="Description of Listings" />
        </Helmet>
        <Box width={1} py={4}>
          <Heading textAlign="center">Listings</Heading>
        </Box>
        <Box width={1}>
          <Flex flexWrap="wrap" justifyContent="center">
            {(() => {
              if (loading) {
                return 'Finding Listings';
              } else if (error) {
                return 'Something went wrong';
              } else if (listings.length) {
                return listings.map(listing => (
                  <Teaser key={Math.random()} {...listing} />
                ));
              }
              return 'No listings';
            })()}
          </Flex>
        </Box>
      </Flex>
    );
  }
}

Listings.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  listings: PropTypes.any,
  loadListings: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  listings: makeSelectListings(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadListings: () => dispatch(loadListings()),
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
