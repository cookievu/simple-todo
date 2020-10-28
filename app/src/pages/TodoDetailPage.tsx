import Overlay from 'components/Overlay'
import Container from 'layouts/Container'
import Section from 'layouts/Section'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getTodo } from 'redux/actions/todo.action'

const TodoDetailPage = () => {
  let { id }: any = useParams()
  const [isLoading, currentTodo] = useSelector((state: any) => [
    state.todo.isLoading,
    state.todo.currentTodo,
  ])
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTodo({id: Number(id)}))
  }, [])

  return (
    <Section>
      <Overlay isVisible={isLoading} />
      <Container>
        <h1 className="flex justify-between text-xl font-bold mb-8">
          <span>Todo detail</span>
        </h1>

        {currentTodo && (
          <div>
            <h1>{currentTodo.title}</h1>
          </div>
        )}
      </Container>
    </Section>
  )
}

export default TodoDetailPage
