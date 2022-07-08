import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { animations } from '../constant/animations'

export const TodoHeader = () => {
  const todos = useSelector(state => state.todos)
  const [completed, setCompleted] = useState([])
  const [handleAnimation, setHandleAnimation] = useState(false)
  const { fade_in, fade_out, fade_up } = animations
  useEffect(() => {
    const animations = setTimeout(() => {
      setHandleAnimation(false)
      setTimeout(() => {
        setHandleAnimation(true)
        setCompleted( todos.filter(item => item.completed === true) )
      }, 200);
     }, 300);

     return () => {
      clearTimeout(animations)
     }
  }, [todos])
  return (
    <div className='todo__header'>
      <h1>Todo List</h1>
      <h3>Simple todo list with React</h3>
      <h3 style={{ textAlign: 'end' }}>Total task: { todos.length } /Completed:  <span className={handleAnimation ? fade_in : fade_out}>{ completed.length }</span></h3>
      {
        completed.length === todos.length && completed.length > 0 &&
        <h2 className={handleAnimation ? fade_up : fade_out} style={{ textAlign: 'center', color: '#29f5da' }}>All tasks completed</h2>
      }
    </div>
  )
}
