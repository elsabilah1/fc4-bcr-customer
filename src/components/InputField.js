import { MenuItem, OutlinedInput, Select, Typography } from '@mui/material'
import InputWrapper from './InputWrapper'

const InputField = ({
  placeholder,
  children,
  name,
  value,
  label,
  onChange,
  type,
  icon,
}) => {
  return (
    <InputWrapper label={label}>
      {type === 'select' ? (
        <Select
          IconComponent={() => icon}
          name={name}
          value={value}
          onChange={onChange}
          displayEmpty
        >
          <MenuItem value=''>
            <Typography variant='body' color='#8A8A8A'>
              {placeholder}
            </Typography>
          </MenuItem>
          {children}
        </Select>
      ) : (
        <OutlinedInput
          size='small'
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          endAdornment={icon}
        />
      )}
    </InputWrapper>
  )
}

export default InputField
