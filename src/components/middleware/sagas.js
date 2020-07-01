
import {takeLatest,call,put,takeEvery} from 'redux-saga/effects'
import {requestDog,requestDogSuccess,requestDogError} from './actions'


import axios from 'axios'

export function* watchFetchDog() {
  alert('in watch')
    yield takeEvery('FETCHED_DOG', fetchDogAsync);
  }
  
  function* fetchDogAsync() {
    try {
        console.log('in fetch')
      yield put(requestDog());
      const data = yield call(() => {
        return fetch('https://dog.ceo/api/breeds/image/random')
        .then(function(response) {
          return response.json();
        })
        }
      );
      console.log('data',data)
      yield put(requestDogSuccess(data));
    } catch (error) {
      yield put(requestDogError());
    }
  }