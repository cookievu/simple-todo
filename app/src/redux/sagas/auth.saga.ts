import { ActionType } from 'contracts/action'
import { call, put } from 'redux-saga/effects'
import auth from 'apis/auth.api'

export function* login(action: ActionType) {
  try {
    const response = yield call(auth.login, action.payload)
    yield put({ type: 'LOGIN_SUCCESS', payload: response })
    localStorage.setItem('access_token', response.token)
  } catch (error) {
    yield put({
      type: 'LOGIN_FAILED',
      payload: error.response.data.message,
    })
  }
}

export function* logout(action: ActionType) {
  try {
    yield call(auth.logout)
    localStorage.removeItem('access_token')
    yield put({ type: 'LOGOUT_SUCCESS', payload: null })
  } catch (error) {
    yield put({ type: 'LOGOUT_FAILED', payload: error })
  }
}
