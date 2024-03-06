
import { Typography, Box, IconButton } from '@mui/material'
import FilterListIcon from '@mui/icons-material/FilterList'
import CloseIcon from '@mui/icons-material/Close'

type Props = {
  toggleOpenFilter: () => void
  isMobileScreen: boolean
  isMobileFilterOpen: boolean
}

const Header = ({toggleOpenFilter, isMobileScreen, isMobileFilterOpen}: Props): JSX.Element => {
  return (
    <Box
      component='header'
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        width: 1,
        maxWidth: 1200}
      }
    >
      <Typography variant='h2' paragraph sx={{display: 'inline-flex'}} >
        <span>to</span>
        <Typography
          variant='h2'
          component={'span'}
          sx={{
            background: (theme) => `linear-gradient(130deg, ${theme.palette.violet.light} 0%, ${theme.palette.violet.dark} 100%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"}
          }
        >
          do.
        </Typography>
      </Typography>
      {isMobileScreen &&
      <IconButton size='large' onClick={toggleOpenFilter}>
        {isMobileFilterOpen ?
          <CloseIcon color='secondary' fontSize='large'/>
          :
          <FilterListIcon color='secondary' fontSize='large'/>
        }
      </IconButton>
      }
    </Box>
  )
}

export default Header