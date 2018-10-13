import { fromJS } from 'immutable';
import listingsReducer from '../reducer';

describe('listingsReducer', () => {
  it('returns the initial state', () => {
    expect(listingsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
