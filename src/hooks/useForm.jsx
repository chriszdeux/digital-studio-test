import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTask, editTask } from "../components/slices/todoSlice"

export const useForm = () => {
  const [values, setValues] = useState( {
    add: '',
    edit: '',
    error: false,
  } )

  const { add, edit } = values
  const dispatch = useDispatch()
  const handleOnChange = (e) => {
    const { value, name } = e.target
    setValues({
      ...values,
      [name]:value
    })
  }
  const handleSubmit = ( e ) => {
    if(values.add.length === 0) {
      setValues({...values, error: true})
      e.preventDefault()

    }  else {
      e.preventDefault();
      dispatch( addTask(add) )
      setValues({...values, add: '', error: false})
    }
  }

  const handleEdit = ( id ) => {
    if(values.edit.length === 0) {
      setValues({...values, error: true})

    }  else {
      // e.preventDefault()
      dispatch( editTask({id, edit}) )
      setValues({...values, edit: '', error: false})
    }
  }


  return { values, handleOnChange, handleSubmit, handleEdit }
}