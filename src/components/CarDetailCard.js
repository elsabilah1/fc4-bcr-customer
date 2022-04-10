import { Box, Stack, Typography } from '@mui/material'
import { FiSettings, FiUsers, FiCalendar } from 'react-icons/fi'
import Btn from './Btn'

const CarDetailCard = ({ item }) => {
  return (
    <Box p={3} borderRadius={2} boxShadow='0px 0px 4px rgba(0, 0, 0, 0.15)'>
      <Box textAlign='center' minHeight='200px'>
        <img style={{ width: '100%' }} src={item?.image} alt={item?.name} />
      </Box>

      <Box mb={6}>
        <Typography
          variant='body'
          fontWeight={700}
          textTransform='capitalize'
          paragraph
          mb={1}
        >
          {item?.name}/{item?.category}
        </Typography>

        <Typography
          variant='body'
          fontWeight={300}
          color='#8A8A8A'
          fontSize='10px'
        >
          <Stack direction='row' gap={2}>
            <Box display='flex' gap={1}>
              <FiUsers />4 orang
            </Box>
            <Box display='flex' gap={1}>
              <FiSettings />
              Manual
            </Box>
            <Box display='flex' gap={1}>
              <FiCalendar />2 Tahun
            </Box>
          </Stack>
        </Typography>
      </Box>

      <Box display='flex' justifyContent='space-between' mb={2}>
        <Typography variant='body' fontWeight={300}>
          Total
        </Typography>
        <Typography variant='body' fontWeight={700} paragraph mb={1}>
          Rp. {item?.price.toLocaleString('id-ID')}
        </Typography>
      </Box>
      <Btn fullWidth>lanjutkan pembayaran</Btn>
    </Box>
  )
}

export default CarDetailCard
