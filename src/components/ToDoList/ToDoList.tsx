
import {Box, List, ListItem } from '@mui/material'

import ToDoCard from '../ToDoCard/ToDoCard'
import AddToDoForm from '../AddToDoForm/AddToDoForm'
import Counter from '../Counter/Counter'

import type {ToDo} from '@/types'

type Props = {
  isOpenMobileFilter: boolean
  todos: ToDo[]
}


const ToDoList = ({isOpenMobileFilter, todos}: Props): JSX.Element => {

  return (
    <Box
      component='main'
      sx={{
        bgcolor:'primary.main',
        p: 3,
        borderRadius: 5,
        flex: '1 1 auto',
        filter: isOpenMobileFilter ? 'blur(4px)' : 'blur(0px)',
        transition: 'filter 0.7s ease-out',
        maxHeight: 1,
        display: 'flex',
        flexDirection: 'column'}
      }
    >
      <Counter/>
      <AddToDoForm/>
      <List sx={{flex: '1 1 100%', overflowY: 'scroll'}}>
        {todos.map(todo =>
          <ListItem key={todo.id}>
            <ToDoCard {...todo} />
          </ListItem>
        )}
      </List>
    </Box>
  )
}

export default ToDoList