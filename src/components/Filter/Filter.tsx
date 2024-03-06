
import Box from '@mui/material/Box'
import { Typography, List, ListItem,ListItemButton, ListItemText, type SxProps } from '@mui/material'

import { FilterOptions } from '@/types'

type Props = {
  isOpenMobileFilter: boolean
  isMobileScreen: boolean
  selectedOption: FilterOptions
  handler: (option: FilterOptions) => void
}

const Filter = ({isMobileScreen, isOpenMobileFilter, selectedOption, handler}: Props): JSX.Element => {

  const createStyles = (): SxProps => {
    const desktopStyles = {
      bgcolor:'primary.main',
      p: 3,
      borderRadius: 5,
      flex: '0 1 250px',
    }
    const mobileStyles = {
      ...desktopStyles,
      position: 'absolute',
      minWidth: 250,
      maxHeight: 'fit-content',
      width: 0.75,
      zIndex: 10,
      transform: 'translate(-50%, 0)',
      top: '100px',
      boxShadow: isOpenMobileFilter?  '0px 0px 15px 4px rgba(145,114,247,0.51)' : 'none',
      transition: 'left 0.2s ease-in, box-shadow 0.3s ease-in-out 0.2s',
      left: isOpenMobileFilter ? '50%' : '-50%'
    }
    return isMobileScreen ? mobileStyles : desktopStyles
  }

  return (
    <Box
      component='aside'
      sx={createStyles()}
    >
      <Typography>
        Filter
      </Typography>
      <List >
        {Object.values(FilterOptions).map(option =>
          <ListItem key={option} >
            <ListItemButton selected={option === selectedOption} onClick={() => handler(option)}>
              <ListItemText primary={option}/>
            </ListItemButton>
          </ListItem>
        )}
      </List>
    </Box>
  )
}

export default Filter