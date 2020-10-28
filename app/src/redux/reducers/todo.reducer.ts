import { ActionType } from 'contracts/action'
import { removeItemById, removeLastItem } from 'utils/array'

const initData = {
  todos: [],
  page: 0,
  totalPage: 1,
  currentTodo: null,
  totalItems: 0,
  isLoading: false,
  errorMessage: '',
}

const todoReducer = (state = initData, { type, payload }: ActionType) => {
  switch (type) {
    case 'GET_TODOS':
      return {
        ...state,
        isLoading: true,
      }
    case 'GET_TODOS_SUCCESS':
      return {
        ...state,
        todos: payload.data,
        page: payload.page,
        totalItems: payload.total,
        totalPage: payload.lastPage,
        isLoading: false,
      }
    case 'GET_TODOS_FAILED':
      return {
        ...state,
        isLoading: false,
        errorMessage: payload,
      }

    case 'GET_TODO':
      return {
        ...state,
        isLoading: true,
      }
    case 'GET_TODO_SUCCESS':
      return {
        ...state,
        currentTodo: payload,
        isLoading: false,
      }
    case 'GET_TODO_FAILED':
      return {
        ...state,
        isLoading: false,
        errorMessage: payload,
      }
    case 'CREATE_TODO':
      return {
        ...state,
        isLoading: true,
      }
    case 'CREATE_TODO_SUCCESS':
      return {
        ...state,
        todos: [payload, ...removeLastItem(state.todos)],
        isLoading: false,
      }
    case 'CREATE_TODO_FAILED':
      return {
        ...state,
        isLoading: false,
        errorMessage: payload,
      }
    case 'REMOVE_TODO':
      return {
        ...state,
        isLoading: true,
      }
    case 'REMOVE_TODO_SUCCESS':
      return {
        ...state,
        todos: [...removeItemById(state.todos, payload.id)],
        isLoading: false,
      }
    case 'REMOVE_TODO_FAILED':
      return {
        ...state,
        isLoading: false,
        errorMessage: payload,
      }

    default:
      return state
  }
}

export default todoReducer
