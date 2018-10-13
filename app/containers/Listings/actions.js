/*
 *
 * Listings actions
 *
 */

import {
  LOAD_LISTINGS,
  LOAD_LISTINGS_ERROR,
  LOAD_LISTINGS_SUCCESS,
} from './constants';

export function loadListings() {
  return {
    type: LOAD_LISTINGS,
  };
}

export function listingsLoaded(listings) {
  return {
    type: LOAD_LISTINGS_SUCCESS,
    listings,
  };
}

export function listingsLoadingError(error) {
  return {
    type: LOAD_LISTINGS_ERROR,
    error,
  };
}
