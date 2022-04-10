import Btn from './Btn'
import { Box, Typography } from '@mui/material'
import { FiUsers, FiSettings, FiCalendar } from 'react-icons/fi'

const CarCard = ({ item }) => {
  return (
    <Box p={3} borderRadius={1} boxShadow='0px 0px 4px rgba(0, 0, 0, 0.15)'>
      <Box textAlign='center' minHeight='200px'>
        <img style={{ width: '100%' }} src={item.image} alt={item.name} />
      </Box>
      <Typography variant='body' paragraph mb={1} textTransform='capitalize'>
        {item.name}/{item.category}
      </Typography>
      <Typography variant='title' paragraph mb={1}>
        Rp. {item.price.toLocaleString('id-ID')} / hari
      </Typography>
      <Typography variant='body' fontWeight={300} paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Typography>
      <Box mb={3} display={{ xs: 'none', sm: 'block' }}>
        <Typography variant='body' fontWeight={300}>
          <Box display='flex' gap={1} mb={2}>
            <FiUsers />4 orang
          </Box>
          <Box display='flex' gap={1} mb={2}>
            <FiSettings />
            Manual
          </Box>
          <Box display='flex' gap={1}>
            <FiCalendar />2 Tahun
          </Box>
        </Typography>
      </Box>
      <Btn fullWidth href={`/car/${item.id}`}>
        pilih mobil
      </Btn>
    </Box>
  )
}

export default CarCard
