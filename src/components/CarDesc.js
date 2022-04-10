import { Stack, Typography } from '@mui/material'
import { car } from '../data'
import List from './List'

const CarDesc = () => {
  return (
    <Stack
      p={3}
      mb={3}
      gap={2}
      borderRadius={2}
      boxShadow='0px 0px 4px rgba(0, 0, 0, 0.15)'
    >
      <Typography variant='body' fontWeight={700}>
        Tentang Paket
      </Typography>
      <Typography variant='body' fontWeight={300}>
        Include
      </Typography>
      <List>
        {car.include.map((item, i) => {
          return <li key={i}>{item}</li>
        })}
      </List>
      <Typography variant='body' fontWeight={300}>
        Exclude
      </Typography>
      <List>
        {car.exclude.map((item, i) => {
          return <li key={i}>{item}</li>
        })}
      </List>
      <Typography variant='body' fontWeight={700}>
        Refund, Reschedule, Overtime
      </Typography>
      <List>
        {car.description.map((item, i) => {
          return <li key={i}>{item}</li>
        })}
      </List>
    </Stack>
  )
}

export default CarDesc
