import {put,takeLatest,all} from 'redux-saga/effects'

function* fetchNews() {

  const json = yield  fetch('https://run.mocky.io/v3/4e0d23e4-198f-4165-b24d-6a90cb406f66')
    .then(function(response) {
      return response.json();
    }).then(function(data) {
     return data 
    });

  yield put({ type: "NEWS_RECEIVED", json: json || [{ error: json }] });
}

function* actionWatcher() {
  yield takeLatest('GET_NEWS', fetchNews)
}


export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}