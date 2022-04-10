import { Box, Stack } from '@mui/material'
import Logo from './Logo'
import NavLinks from './NavLinks'
import Btn from './Btn'

const Navbar = () => {
  return (
    <Box
      py={3}
      px={2}
      mx='auto'
      maxWidth='lg'
      display='flex'
      alignItems='center'
      justifyContent='space-between'
    >
      <Logo />

      <Stack
        display={{ xs: 'none', sm: 'flex' }}
        direction='row'
        alignItems='center'
        gap={4}
      >
        <NavLinks />
        <Btn>register</Btn>
      </Stack>
    </Box>
  )
}

export default Navbar
