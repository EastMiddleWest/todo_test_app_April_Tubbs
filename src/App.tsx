import React from 'react'
import { createTheme, ThemeProvider, getContrastRatio} from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import Container from '@mui/material/Container'

import ToDoList from '@/components/ToDoList/ToDoList'
import Filter from '@/components/Filter/Filter'
import Header from '@/components/Header/Header'

import useFilterdToDos from './hooks/useFilterdToDos'

import { FilterOptions } from './types'

declare module '@mui/material/styles' {
  interface Palette {
    violet: Palette['primary']
  }

  interface PaletteOptions {
    violet?: PaletteOptions['primary']
  }
}

function App(): JSX.Element {

  const theme = createTheme({
    palette:{
      primary: {
        main: '#18181c',
        dark: '#121215',
        light: '#2f2d36'
      },
      secondary:{
        main: '#8d8fd2'
      },
      text:{
        primary: '#dfe0fb',
        secondary: '#8d8fd2'
      },
      violet:{
        main: 'rgb(125, 90, 242)',
        light: 'rgb(145, 114, 247)',
        dark: 'rgb(104, 61, 247)',
        contrastText: getContrastRatio('rgb(125, 90, 242)', '#fff') > 4.5 ? '#fff' : '#111',
      }
    },
    typography:{
      fontFamily: ['Lexend Deca', 'sans-serif'].join(','),
      allVariants:{
        color: '#dfe0fb'
      }
    },
    components: {
      MuiListItemButton:{
        styleOverrides: {
          root:({ theme })=>({
            '&.Mui-selected, &.Mui-selected:hover': {
              backgroundColor: theme.palette.primary.light,
            },
            borderRadius: 8
          }),
        },
      },
      MuiCheckbox:{
        styleOverrides:{
          root: {
            borderRadius: '50%',
            transform: 'scale(1)',
            transition: 'transform 0.2s ease-out',
            ':active': {
              transform: 'scale(0.8)',
            }
          }
        }
      },
      MuiInput:{
        styleOverrides:{
          root: ({theme})=>({
            paddingBottom: 5,
            '::before':{
              borderBottom: `2px solid ${theme.palette.text.primary}`
            }
          })
        }
      }
    }
  })

  const match = useMediaQuery(theme.breakpoints.up(780))
  const [isOpenFilter, setIsOpenFilter] = React.useState(false)

  const {filter, filteredToDos, setFilter} = useFilterdToDos()

  const handleChangeFilter = (option: FilterOptions): void => {
    setFilter(option)
    !match && setIsOpenFilter(false)
  }


  return (
    <ThemeProvider theme={theme}>
      <Container
        sx={{
          height: '100%',
          width: '100%',
          bgcolor:'primary.dark',
          display:'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
          p: 2}
        }
        maxWidth={false}
        disableGutters
      >
        <Header
          isMobileScreen={!match}
          isMobileFilterOpen={isOpenFilter}
          toggleOpenFilter={() => setIsOpenFilter(prev => !prev)}
        />
        <Container
          sx={{
            position: 'relative',
            display: 'flex',
            flexFlow: 'row wrap',
            gap: 2,
            maxHeight: 0.8}
          }
          disableGutters
        >
          <Filter
            isMobileScreen={!match}
            isOpenMobileFilter={isOpenFilter}
            selectedOption={filter}
            handler={handleChangeFilter}
          />
          <ToDoList
            isOpenMobileFilter={isOpenFilter}
            todos={filteredToDos}
          />
        </Container>
      </Container>
    </ThemeProvider>
  )
}

export default App
