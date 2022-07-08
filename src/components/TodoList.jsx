import React from 'react'
import { useSelector } from 'react-redux'
import { TodoItem } from './TodoItem'

export const TodoList = () => {
  const todos = useSelector(state => state.todos)

  return (
    <ul className='todo__list'>
      {
        todos.length === 0 
        ? <h2 style={{textAlign: 'center'}}>No tasks to do</h2>
        : todos.map(item => (
          <TodoItem key={ item.id } item={ item }/>
        ))
      }
    </ul>
  )
}
