import { createTheme } from '@mui/material'

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1440,
    },
  },
  palette: {
    primary: {
      main: '#0D28A6',
      light: '#5E70C4',
      dark: '#091B6F',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#5CB85F',
      light: '#92D094',
      dark: '#3D7B3F',
      contrastText: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: '"Helvetica", "Arial", sans-serif',
    titleHero: {
      fontFamily: '"Helvetica", "Arial", sans-serif',
      fontWeight: 700,
      fontSize: '2.25rem',
      lineHeight: '3.375rem',
    },
    title: {
      fontFamily: '"Helvetica", "Arial", sans-serif',
      fontWeight: 700,
      fontSize: '1rem',
      lineHeight: 1.5,
      letterSpacing: 0,
    },
    body: {
      fontFamily: '"Helvetica", "Arial", sans-serif',
      fontWeight: 400,
      fontSize: '0.875rem',
      lineHeight: 1.25,
      letterSpacing: 0,
    },
  },
})

export default theme
