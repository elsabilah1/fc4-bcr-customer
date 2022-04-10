import { Box, Stack } from '@mui/material'

const FormWrapper = ({ children, handleSubmit }) => {
  return (
    <Box
      p={3}
      bgcolor='#fff'
      borderRadius={2}
      mx='auto'
      left={'50%'}
      bottom={-70}
      width={{ xs: '90%', lg: '75%' }}
      position={{ md: 'absolute' }}
      sx={{ transform: { md: 'translateX(-50%)' } }}
      boxShadow={'0px 0px 10px rgba(0, 0, 0, 0.15)'}
    >
      <form onSubmit={handleSubmit}>
        <Stack
          gap={1}
          direction={{ xs: 'column', md: 'row' }}
          alignItems='end'
          justifyContent='space-between'
        >
          {children}
        </Stack>
      </form>
    </Box>
  )
}

export default FormWrapper
