// import { take, call, put, select } from 'redux-saga/effects';

import { call, takeLatest } from 'redux-saga/effects';
import { LOAD_LISTINGS } from 'containers/App/constants';

import request from 'utils/request';

export function* getRepos() {
  const requestURL = `https://api.spork.digital/test/`;
  try {
    const repos = yield call(request, requestURL);
    console.log(repos);
  } catch (err) {
    console.log(err);
  }
}

export default function*() {
  yield takeLatest(LOAD_LISTINGS, getRepos);
}
