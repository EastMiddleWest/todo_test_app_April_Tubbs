
import { Box, Typography } from '@mui/material'

import { useAppSelector } from '@/store/store'
import { todoSelector } from '@/store/slices/ToDoSlice'

const Counter = (): JSX.Element => {

  const {todos} = useAppSelector(todoSelector)

  const completedCount = todos.filter(todo => todo.completed).length
  const totalCount = todos.length

  return (
    <Box sx={{flex: '0 0 auto'}}>
      <Typography paragraph sx={{display: 'inline-flex', fontSize: '1.25em'}}>
        <Typography component='span' sx={{fontSize: 'inherit'}}>
          {`Completed:`}
        </Typography>
        <Typography component='span' color={'violet.main'} sx={{mx: 0.8, fontSize: 'inherit'}}>
          {completedCount}
        </Typography>
        <Typography component='span' sx={{fontSize: 'inherit'}}>
          {`of ${totalCount}`}
        </Typography>
      </Typography>
    </Box>
  )
}

export default Counter