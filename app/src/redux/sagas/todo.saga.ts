import { ActionType } from 'contracts/action'
import { call, put } from 'redux-saga/effects'
import todo from 'apis/todo.api'
import {navigator} from 'utils/navigation'

export function* getTodos(action: ActionType) {
  const { page } = action.payload
  try {
    const response = yield call(todo.getTodos, page)
    yield put({ type: 'GET_TODOS_SUCCESS', payload: response })
  } catch (error) {
    yield put({ type: 'GET_TODOS_FAILED', payload: error.message })
  }
}

export function* getTodo(action: ActionType) {
  const { id } = action.payload
  try {
    const response = yield call(todo.getTodo, id)
    yield put({ type: 'GET_TODO_SUCCESS', payload: response })
  } catch (error) {
    yield put({ type: 'GET_TODO_FAILED', payload: error.message })
  }
}

export function* createTodo(action: ActionType) {
  try {
    const response = yield call(todo.createTodo, action.payload)
    yield put({ type: 'CREATE_TODO_SUCCESS', payload: response })
    setTimeout(() => navigator.push('/'), 1000)
  } catch (error) {
    yield put({ type: 'CREATE_TODO_FAILED', payload: error.message })
  }
}

export function* deleteTodo(action: ActionType) {
  const { id } = action.payload
  try {
    const response = yield call(todo.deleteTodo, id)
    yield put({ type: 'DELETE_TODO_SUCCESS', payload: response })
  } catch (error) {
    yield put({ type: 'DELETE_TODO_FAILED', payload: error.message })
  }
}
