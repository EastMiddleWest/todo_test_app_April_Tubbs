import { Typography, Box, Checkbox, FormControlLabel } from "@mui/material"
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import Slide from '@mui/material/Slide'

import { useAppDispatch } from "@/store/store"
import { toggleStatus } from "@/store/slices/ToDoSlice"

import type {ToDo} from '@/types'

const ToDoCard = ({id, content, completed}: ToDo): JSX.Element => {

  const dispatch = useAppDispatch()

  const handleChangeStatus = (): void => {
    dispatch(toggleStatus(id))
  }

  return (
    <Slide direction="right" in mountOnEnter>
      <Box
        sx={{
          bgcolor: 'primary.light',
          p: 2,
          borderRadius: 3,
          width: 1,
          display: 'flex',
          alignItems: 'center',
          gap: 1}
        }
      >
        <FormControlLabel
          control={
            <Checkbox
              inputProps={{ 'aria-label': 'controlled' }}
              icon={<RadioButtonUncheckedIcon color='secondary' />}
              checkedIcon={<CheckCircleIcon color='secondary'  />}
              checked={completed}
              onChange={handleChangeStatus}
            />
          }
          label={
            <Typography  variant="body1" color={'text.secondary'} sx={{width: 'fit-content'}} >
              {content}
            </Typography>
          }
        />
      </Box>
    </Slide>
  )
}

export default ToDoCard