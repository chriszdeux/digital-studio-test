import React from 'react'
import { RiPencilFill as Edit, RiDeleteBin7Fill as Delete } from 'react-icons/ri';
import { IoCheckmarkDoneOutline as Done } from 'react-icons/io5';

import { completeTask, deleteTask } from './slices/todoSlice'
import { useDispatch } from 'react-redux';
import { animations } from '../constant/animations';
import { useContext } from 'react';
import { myContext } from './context/context';
const style = {
  ':hover': {
    color: 'red',
    border: '1px solid red'
  }
}


export const TodoItem = ({ item }) => {

  const dispatch = useDispatch()
  const { id, task, completed } = item
  // const [editTask, setEditTask] = useState(false)
  const {  handleFormEdit } = useContext(myContext)
  const handleRemove = ( id ) => {
    dispatch(deleteTask(id))
  }

  const handleCompleted = ( id ) => {
    dispatch(completeTask( id ))
  }

  // const handleEditTask = () => {
  //   setEditTask(!editTask)
  // }

  const { fade_in } = animations
  return (
    <li className={`todo__item ${ fade_in }`}>
      <p style={{ textDecoration: completed && 'line-through' }}>{ task }</p>
      <div className='list__buttons' style={ style }>
        {
          !completed && 
        <Edit className='icon' onClick={ () => handleFormEdit(item) }/>
        }
        <Delete className='icon' style={{ margin: '0 1rem' }} onClick={ () => handleRemove(id) }/>
        <Done className='icon' onClick={ () => handleCompleted(id) } style={{ color: completed && '#29f5da' }}/>
      </div>
    </li>
  )
}
