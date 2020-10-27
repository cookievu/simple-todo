import { all, takeLatest } from 'redux-saga/effects'
import { login, logout } from './auth.saga'
import { createTodo, deleteTodo, getTodo, getTodos } from './todo.saga'

const sagas = function* () {
  yield all([
    takeLatest('LOGIN', login),
    takeLatest('LOGOUT', logout),
    takeLatest('GET_TODOS', getTodos),
    takeLatest('GET_TODO', getTodo),
    takeLatest('CREATE_TODO', createTodo),
    takeLatest('DELETE_TODO', deleteTodo),
  ])
}
export default sagas
