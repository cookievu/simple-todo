import Overlay from 'components/Overlay'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { login } from 'redux/actions/auth.action'

const LoginPage = () => {
  const auth = useSelector((state: any) => state.auth)
  const dispatch = useDispatch()
  const { register, handleSubmit, watch, errors } = useForm()

  const onSubmit = (data: any) => {
    dispatch(login(data))
  }

  return (
    <div className="w-full">
      <Overlay isVisible={auth.isLoading} />
      <div className="flex w-screen h-screen justify-center items-center">
        <div className="w-full max-w-md">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white shadow-lg rounded px-12 pt-6 pb-8 mb-4"
          >
            <div className="text-gray-800 text-2xl flex justify-center border-b-2 py-2 mb-4">
              Login
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-normal mb-2">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="email"
                v-model="form.email"
                type="email"
                required
                placeholder="Email"
                ref={register({ required: true })}
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-normal mb-2">
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                v-model="form.password"
                type="password"
                placeholder="Password"
                name="password"
                required
                ref={register({ required: true })}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="px-4 py-2 rounded text-white inline-block shadow-lg bg-blue-500 hover:bg-blue-600 focus:bg-blue-700"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
          <p className="text-center text-gray-500 text-xs">
            &copy;2020 Strike Team. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
