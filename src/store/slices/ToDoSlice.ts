
import { createSlice } from '@reduxjs/toolkit'

import type { RootState } from '../store'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { ToDo } from '@/types'


const initialState: ToDoState = {
  todos: []
}

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addToDo: (state, action: PayloadAction<ToDo>) => {
      state.todos = [action.payload, ...state.todos]
    },
    toggleStatus: (state, action: PayloadAction<ToDo['id']>) =>{
      const todoIndex = state.todos.findIndex(todo => todo.id === action.payload)
      if(todoIndex > -1) {
        state.todos[todoIndex].completed = !state.todos[todoIndex].completed
      }
    }
  }
})

export type ToDoState = {
  todos: ToDo[]
}

export const { addToDo, toggleStatus} = todoSlice.actions
export const todoSelector = (state: RootState):ToDoState => state.todo

export default todoSlice.reducer