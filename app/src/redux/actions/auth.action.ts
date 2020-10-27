import { ActionType } from 'contracts/action'

export const login = (payload: ActionType) => ({
  type: 'LOGIN',
  payload,
})

export const logout = (payload: ActionType) => ({
  type: 'LOGOUT',
  payload,
})
