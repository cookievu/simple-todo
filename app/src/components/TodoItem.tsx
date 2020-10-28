import { TodoModel } from 'contracts/todo'
import React from 'react'
import moment from 'moment'
import {Link} from 'react-router-dom'

interface Props {
  todo: TodoModel
}

const TodoItem = ({ todo }: Props) => {

  return (
    <Link to={'/todo/' + todo.id} className="p-2 w-full sm:w-6/12 md:w-1/3 flex">
      <div className="flex-grow group hover:bg-gray-300 p-4 cursor-pointer bg-white rounded shadow-lg select-none overflow-hidden relative">
        <p className="font-semibold text-lg text-gray-900 group-hover:text-white break-all truncate">
          {todo.title}
        </p>
        <p className="text-xs font-bold">{moment(todo.created_at).fromNow()}</p>

        <p className="text-sm text-gray-700 group-hover:text-white mb-2 truncate-6-lines">
          {todo?.description}
        </p>
      </div>
    </Link>
  )
}

export default TodoItem
