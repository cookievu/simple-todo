import { ActionType } from 'contracts/action'
import { call, put, select } from 'redux-saga/effects'
import todo from 'apis/todo.api'
import { navigator } from 'utils/navigation'

export function* getTodos(action: ActionType) {
  const { page, keyword } = action.payload
  try {
    const response = yield call(todo.getTodos, page, keyword)
    yield put({ type: 'GET_TODOS_SUCCESS', payload: response })
  } catch (error) {
    yield put({ type: 'GET_TODOS_FAILED', payload: error.message })
  }
}

export function* getTodo(action: ActionType) {
  const { id } = action.payload
  try {
    let currentTodo = yield select((state: any) =>
      state.todo.todos.find((td: any) => td.id === id)
    )
    if (!currentTodo) {
      currentTodo = yield call(todo.getTodo, id)
    }
    yield put({ type: 'GET_TODO_SUCCESS', payload: currentTodo })
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
    yield call(todo.deleteTodo, id)
    yield put({ type: 'REMOVE_TODO_SUCCESS', payload: { id } })
  } catch (error) {
    yield put({ type: 'REMOVE_TODO_FAILED', payload: error.message })
  }
}
