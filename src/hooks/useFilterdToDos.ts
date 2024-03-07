import React from 'react'
import { useAppSelector } from "@/store/store"
import { todoSelector } from "@/store/slices/ToDoSlice"

import { type ToDo, FilterOptions } from '@/types'

type HookReturnType = {
  filter: FilterOptions
  setFilter: React.Dispatch<React.SetStateAction<FilterOptions>>
  filteredToDos: ToDo[]
}

const useFilterdToDos = (): HookReturnType => {

  const {todos} = useAppSelector(todoSelector)

  const [filter, setFilter] = React.useState(FilterOptions.All)
  const [filteredToDos, setFilteredToDos] = React.useState(todos)

  React.useEffect(() =>{
    const filtered = todos.filter(todo => {
      switch (filter) {
        case 'Completed': return todo.completed
        case 'Current': return !todo.completed
        case 'All': return true
        default: return true
      }
    })
    setFilteredToDos(filtered)
  },[filter, todos])

  return {filter, setFilter, filteredToDos}
}

export default useFilterdToDos