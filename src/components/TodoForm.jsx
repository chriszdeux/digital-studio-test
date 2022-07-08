import React, { useContext} from 'react'
import { useForm } from '../hooks/useForm'
import { myContext } from './context/context'

export const TodoForm = () => {
  const { openFormEdit } = useContext(myContext)
  const { values, handleSubmit, handleOnChange } = useForm()
  const { add, error } = values

  // console.log(add, error)
  return (
    <form onSubmit={ handleSubmit } className='todo__form'>
      <label>New Task</label>
      <input type="text" name="add" value={add} onChange={ handleOnChange } />
      <button className='btn' type='submit' disabled={ openFormEdit && true }>Add Task</button>
      { error && <p style={{ position: 'absolute', bottom: '-1rem' }}>Cannot add empty task</p> }
    </form>
  )
}
