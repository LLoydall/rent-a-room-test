/*
 *
 * Listings actions
 *
 */

import { LOAD_LISTINGS } from './constants';

export function loadListings() {
  return {
    type: LOAD_LISTINGS,
  };
}
