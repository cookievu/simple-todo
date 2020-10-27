import Api from 'config/axios'

export function getTodos(page: number = 1): Promise<any> {
  return Api.get('todos', {params:{page}})
}

export function getTodo(id: number): Promise<any> {
  return Api.get(`todos/${id}`)
}

export function updateTodo(id: number, data: any): Promise<any> {
  return Api.put(`todos/${id}`, data)
}

export function createTodo(data: any): Promise<any> {
  return Api.post('todos', data)
}

export function deleteTodo(id: number): Promise<any> {
  return Api.delete(`todos/${id}`)
}

export default {
  getTodos,
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo
}
