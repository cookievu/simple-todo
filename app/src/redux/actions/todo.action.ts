import { ActionType } from 'contracts/action'

export const getTodos = (payload: any): ActionType => ({
  type: 'GET_TODOS',
  payload,
})

export const getTodo = (payload: any): ActionType => ({
  type: 'GET_TODO',
  payload,
})

export const createTodo = (payload: any): ActionType => ({
  type: 'CREATE_TODO',
  payload,
})

export const updateTodo = (payload: any): ActionType => ({
  type: 'UPDATE_TODO',
  payload,
})

export const deleteTodo = (payload: any): ActionType => ({
  type: 'DELETE_TODO',
  payload,
})
