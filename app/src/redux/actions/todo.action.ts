import { ActionType } from 'contracts/action'

export const getTodos = (payload: ActionType) => ({
  type: 'GET_TODOS',
  payload,
})

export const getTodo = (payload: ActionType) => ({
  type: 'GET_TODO',
  payload,
})

export const createTodo = (payload: ActionType) => ({
  type: 'CREATE_TODO',
  payload,
})

export const updateTodo = (payload: ActionType) => ({
  type: 'UPDATE_TODO',
  payload,
})

export const deleteTodo = (payload: ActionType) => ({
  type: 'DELETE_TODO',
  payload,
})
