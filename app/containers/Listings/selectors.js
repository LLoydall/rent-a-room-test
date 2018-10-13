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
  createSelector(selectListingsDomain, substate => substate.toJS());

export default makeSelectListings;
export { selectListingsDomain };
