/*
 *
 * Listings reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOAD_LISTINGS,
  LOAD_LISTINGS_ERROR,
  LOAD_LISTINGS_SUCCESS,
} from './constants';

export const initialState = fromJS({
  loading: false,
  error: false,
  listings: [],
});

function listingsReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_LISTINGS:
      return state
        .set('loading', true)
        .set('error', false)
        .set('listings', []);
    case LOAD_LISTINGS_SUCCESS:
      return state
        .set('listings', action.listings.results)
        .set('loading', false)
        .set('error', false);
    case LOAD_LISTINGS_ERROR:
      return state.set('error', action.error).set('loading', false);
    default:
      return state;
  }
}

export default listingsReducer;
