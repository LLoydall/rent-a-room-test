/**
 *
 * Profile
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import { Heading } from 'rebass';

/* eslint-disable react/prefer-stateless-function */
export class Profile extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Profile</title>
          <meta name="description" content="Description of Profile" />
        </Helmet>
        <Heading>Profile</Heading>
        <a href="/">
          <Heading fontSize={16}>Back</Heading>
        </a>
      </div>
    );
  }
}

Profile.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(Profile);
