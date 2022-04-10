import { Box, Button, Typography } from '@mui/material'
import { FiArrowLeft } from 'react-icons/fi'

const Error = () => {
  return (
    <Box
      flexGrow={1}
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      height='100vh'
      gap={4}
    >
      <Box display='flex' gap={2} alignItems='center'>
        <Typography variant='h1' color='error'>
          404
        </Typography>
        <Typography variant='h2' color='error'>
          Page not Found
        </Typography>
      </Box>
      <Button startIcon={<FiArrowLeft />} href='/'>
        Go Back Home
      </Button>
    </Box>
  )
}

export default Error
