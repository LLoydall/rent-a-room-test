import request from 'utils/request';
import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_LISTINGS } from 'containers/App/constants';
import { listingsLoaded, listingsLoadingError } from './actions';

export function* getListings() {
  const requestURL = `https://api.spork.digital/test/`;
  try {
    const listings = yield call(request, requestURL);
    yield put(listingsLoaded(listings));
  } catch (err) {
    yield put(listingsLoadingError(err));
  }
}

export default function*() {
  yield takeLatest(LOAD_LISTINGS, getListings);
}
