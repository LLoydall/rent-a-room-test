/*
 *
 * Listings reducer
 *
 */

import { fromJS } from 'immutable';
import { LOAD_LISTINGS } from './constants';

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
    default:
      return state;
  }
}

export default listingsReducer;
