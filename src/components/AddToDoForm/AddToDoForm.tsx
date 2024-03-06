import React from 'react'
import {Box, TextField, Button } from '@mui/material'

import { useAppDispatch } from '@/store/store'
import { addToDo } from '@/store/slices/ToDoSlice'

import { v4 as uuidv4 } from 'uuid'

import type { ToDo } from '@/types'

const AddToDoForm = (): JSX.Element => {

  const [inputValue, setInputValue] = React.useState('')
  const [error, setError] = React.useState(false)

  const dispatch = useAppDispatch()

  const addNewToDo = (): void => {
    const newRecord: ToDo = {
      id: uuidv4(),
      content: inputValue,
      completed: false
    }
    dispatch(addToDo(newRecord))
    setInputValue('')
  }

  const minLength = import.meta.env.VITE_MIN_TODO_LENGTH

  const handleSubmitt = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    if(inputValue.length < minLength){
      setError(true)
    }
    else addNewToDo()
  }

  return (
    <Box
      component='form'
      sx={{display: 'flex', flexDirection: 'column',alignItems:'center', width: 1}}
      onSubmit={handleSubmitt}
      autoComplete="off"
    >
      <TextField
        error={error}
        fullWidth
        sx={{pb:2}}
        id="standard-basic"
        label="Start typing.."
        variant="standard"
        margin="dense"
        color='secondary'
        value={inputValue}
        onChange={(e)=>setInputValue(e.target.value)}
        onBlur={()=> setError(false)}
        helperText={error ? `Record length must be more or equal than ${minLength}` : null}
      />
      <Button
        variant="contained"
        color="secondary"
        size="large"
        type='submit'
        sx={{
          minWidth: 'fit-content',
          background: (theme) => `linear-gradient(130deg, ${theme.palette.violet.light} 0%, ${theme.palette.violet.dark} 100%)`,
          textTransform: 'capitalize',
          zIndex: 1}
        }
      >
        Add todo
      </Button>
    </Box>
  )
}

export default AddToDoForm