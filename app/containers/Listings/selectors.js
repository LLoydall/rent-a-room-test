import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the listings state domain
 */

const selectListingsDomain = state => state.get('listings', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by Listings
 */

const makeSelectListings = () =>
  createSelector(selectListingsDomain, substate => substate.get('listings'));

const makeSelectLoading = () =>
  createSelector(selectListingsDomain, substate => substate.get('loading'));

const makeSelectError = () =>
  createSelector(selectListingsDomain, substate => substate.get('error'));

export default makeSelectListings;
export {
  selectListingsDomain,
  makeSelectListings,
  makeSelectLoading,
  makeSelectError,
};
