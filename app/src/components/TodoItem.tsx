import { TodoModel } from 'contracts/todo'
import React from 'react'
import moment from 'moment'
import {useDispatch} from 'react-redux'
import {deleteTodo} from 'redux/actions/todo.action'

interface Props {
  todo: TodoModel
}

const TodoItem = ({ todo }: Props) => {

  const dispatch = useDispatch()

  const removeItem = (): void => {
    dispatch(deleteTodo({id: todo.id}))
  }

  return (
    <div className="p-2 w-full sm:w-6/12 md:w-1/3 flex">
      <div className="flex-grow group hover:bg-gray-300 p-4 cursor-pointer bg-white rounded shadow-lg select-none overflow-hidden relative">
        <button className="bg-blue-200 hover:bg-blue-300 text-white font-bold px-2 rounded-full absolute top-0 right-0" onClick={removeItem}>
          x
        </button>
        <p className="font-semibold text-lg text-gray-900 group-hover:text-white break-all truncate">
          {todo.title}
        </p>
        <p className="text-xs font-bold">{moment(todo.created_at).fromNow()}</p>

        <p className="text-sm text-gray-700 group-hover:text-white mb-2 truncate-6-lines">
          {todo?.description}
        </p>
      </div>
    </div>
  )
}

export default TodoItem
