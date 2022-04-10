import { Typography } from '@mui/material'

const List = ({ children }) => {
  return (
    <Typography
      variant='body'
      fontWeight={300}
      color='#8A8A8A'
      lineHeight='175%'
    >
      <ul style={{ paddingLeft: 24 }}>{children}</ul>
    </Typography>
  )
}

export default List
