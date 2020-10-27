import Overlay from 'components/Overlay'
import Container from 'layouts/Container'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { createTodo } from 'redux/actions/todo.action'

const CreateTodoPage = () => {
  const isLoading = useSelector((state: any) => state.todo.isLoading)
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm()

  const onSubmit = (data: any) => {
    if (data.title) {
      dispatch(createTodo(data))
    }
  }
  return (
    <Container>
      <Overlay isVisible={isLoading} />
      <form onSubmit={handleSubmit(onSubmit)} className="m-6">
        <div className="mx-4 card bg-white max-w-md p-10 md:rounded-lg my-8 mx-auto">
          <div className="title">
            <h1 className="text-2xl font-bold text-center">
              Create new todo
            </h1>
          </div>

          <div className="form mt-4">
            <div className="flex flex-col text-sm">
              <label className="font-bold mb-2">Title</label>
              <input
                className=" appearance-none border border-gray-200 p-2 focus:outline-none focus:border-gray-500"
                type="text"
                placeholder="Enter a title"
                name="title"
                ref={register({ required: true })}
              />
            </div>

            <div className="text-sm flex flex-col">
              <label className="font-bold mt-4 mb-2">Description</label>
              <textarea
                className=" appearance-none w-full border border-gray-200 p-2 h-40 focus:outline-none focus:border-gray-500"
                placeholder="Enter your description"
                ref={register}
                name="description"
              ></textarea>
            </div>
          </div>

          <div className="submit">
            <button
              type="submit"
              className=" w-full bg-blue-600 shadow-lg text-white px-4 py-2 hover:bg-blue-700 mt-8 text-center font-semibold focus:outline-none "
            >
              Submit
            </button>
          </div>
        </div>{' '}
      </form>
    </Container>
  )
}

export default CreateTodoPage
