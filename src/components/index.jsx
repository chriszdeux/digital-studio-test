import React from 'react'
import { useContext } from 'react'
import { useDispatch } from 'react-redux'
import { animations } from '../constant/animations'
import { myContext } from './context/context'
import { EditForm } from './EditForm'
import { deleteAll } from './slices/todoSlice'
import { TodoForm } from './TodoForm'
import { TodoHeader } from './TodoHeader'
import { TodoList } from './TodoList'
import { BackgroundAnimated } from './BackgroundAnimated'
export const ToDoApp = () => {
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(deleteAll())
  }
  const { openFormEdit } = useContext(myContext)
  const { fade_in } = animations  
  return (
    <>
    <div className='todo__app'>
      <div className={`todo__component ${ fade_in }`}>
        <TodoHeader />
        <TodoList />
        <TodoForm />
        <button type="submit"  onClick={ handleSubmit } style={{ width: '100%', height: '3rem', border: 'none', outline: 'none' }} >New todo List</button>
      </div>
    <BackgroundAnimated /> 
    </div>
    {
        openFormEdit &&
        <EditForm />
      }
    </>
  )
}
