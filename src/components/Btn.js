import { Button, Typography } from '@mui/material'

const Btn = ({ children, href, fullWidth, outlinedPrimary, type }) => {
  return (
    <Button
      color={outlinedPrimary ? 'primary' : 'secondary'}
      href={href}
      fullWidth={fullWidth && true}
      sx={{ height: '40px' }}
      variant={outlinedPrimary ? 'outlined' : 'contained'}
      type={type}
    >
      <Typography variant='body' fontWeight={700} textTransform='capitalize'>
        {children}
      </Typography>
    </Button>
  )
}

export default Btn
