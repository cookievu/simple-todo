import { ActionType } from 'contracts/action'

const initData = {
  isLoading: false,
  loggedIn: false,
  user: null,
  errorMessage: '',
}

const authReducer = (state = initData, { type, payload }: ActionType) => {
  switch (type) {
    case 'LOGIN':
      return {
        ...state,
        isLoading: true,
      }
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        user: payload.user,
        loggedIn: true,
        isLoading: false,
      }
    case 'LOGIN_FAILED':
      return {
        ...state,
        isLoading: false,
        errorMessage: payload,
      }
    case 'LOGOUT':
      return {
        ...state,
        isLoading: true,
      }
    case 'LOGOUT_SUCCESS':
      return {
        ...state,
        isLoading: false,
        user: null,
      }
    case 'LOGOUT_FAILED':
      return {
        ...state,
        isLoading: false,
        errorMessage: payload,
      }
    default:
      return state
  }
}

export default authReducer
