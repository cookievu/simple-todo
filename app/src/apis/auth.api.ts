import Api from 'config/axios'

export function login({ email, password }: any): Promise<any> {
  return Api.post('auth/login', { email, password })
}

export function register({ name, email, password }: any): Promise<any> {
  return Api.post('auth/register', { name, email, password })
}

export function logout(): Promise<any> {
  return Api.post('auth/logout')
}

export default {
  login,
  register,
  logout
}
