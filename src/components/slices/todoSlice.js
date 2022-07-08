import { createSlice } from '@reduxjs/toolkit'
import { idGenerator } from '../../utils/idGenerator'

const taskSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTask(state, action) {
      // debugger
      state.push({
        id: idGenerator(),
        task: action.payload,
        completed: false
      })
    },
    completeTask(state, action) {
      const todo = state.find(item => item.id === action.payload)
      todo.completed = !todo.completed
    },
    deleteTask(state, action) {
      return state.filter(item => item.id !== action.payload)
    },
    editTask(state, action) {
      const { id, edit } = action?.payload
      // debugger
      // debugger
      const edited = state.find(item => item.id === id)
      edited.task = edit
    },
    deleteAll() {
      return []
    }
  }
})

export const { addTask, completeTask, deleteTask, editTask, deleteAll } = taskSlice.actions
export default taskSlice.reducer