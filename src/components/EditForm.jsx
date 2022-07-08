import React, { useContext } from 'react'
import { useForm } from '../hooks/useForm'
import { myContext } from './context/context'
const styleForm = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '10rem',
}
export const EditForm = () => {
  const { data, handleFormEdit } = useContext(myContext)
  const { id } = data
  // debugger
  // const { id, handleEditTask } = props
  const { values, handleOnChange, handleEdit } = useForm()
  const { edit } = values

  

  const handleFullEdit = () => {
    handleEdit(id)
    handleFormEdit(false)
  }
  return (
    <div className='edit__task' >
      <h2>Original Task: { data.task }</h2>
      <h2>Preview: { edit }</h2>

      <form className='todo__form edited' style={ styleForm }>
        <input type="text" name="edit" value={ edit } onChange={ handleOnChange } style={{ textAlign: 'center' }}/>
      <div style={{ width: '50%', display: 'flex', justifyContent: 'space-around'}}>
        <button type='submit' className='btn' onClick={ handleFormEdit } >Cancel</button>
      <button type='submit' className='btn' onClick={ handleFullEdit }>Confirm</button>
      </div>
      </form>
    </div>
  )
}
