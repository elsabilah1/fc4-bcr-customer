import { FormControl, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'

const InputWrapper = ({ children, label }) => {
  const { carId } = useParams()

  return (
    <FormControl
      disabled={carId && true}
      fullWidth
      color='secondary'
      variant='outlined'
      size='small'
    >
      <label htmlFor={label} style={{ marginBottom: 4 }}>
        <Typography
          fontSize='12px'
          lineHeight='18px'
          color='#3C3C3C'
          fontWeight={300}
        >
          {label}
        </Typography>
      </label>
      {children}
    </FormControl>
  )
}

export default InputWrapper
