import Overlay from 'components/Overlay'
import TodoItem from 'components/TodoItem'
import Container from 'layouts/Container'
import Section from 'layouts/Section'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTodos } from 'redux/actions/todo.action'

const IndexPage = () => {
  const todo = useSelector((state: any) => state.todo)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!todo.totalItems) {
      dispatch(getTodos(todo.page + 1))
    }
  }, [])

  const refreshList = (): void => {
    dispatch(getTodos(todo.page + 1))
  }

  return (
    <Section>
      <Overlay isVisible={todo.isLoading} />
      <Container>
        <h1 className="flex justify-between text-xl font-bold mb-8">
          <span>All todos</span>

          <button className="text-blue-500 text-sm" onClick={refreshList}>
            Refresh
          </button>
        </h1>

        <div className="flex flex-wrap -mx-2">
          {todo.todos.map((todo: any) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </div>
      </Container>
    </Section>
  )
}

export default IndexPage
