import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Box, Grid } from '@mui/material'
import CarDetailCard from '../components/CarDetailCard'
import CarDesc from '../components/CarDesc'
import Btn from '../components/Btn'

const Car = () => {
  const { carId } = useParams()
  const [car, setCar] = useState()

  const baseUrl = 'https://rent-cars-api.herokuapp.com'

  const getCarById = async (id) => {
    const res = await axios.get(baseUrl + '/customer/car/' + id)

    setCar(res.data)
  }

  useEffect(() => {
    getCarById(carId)
  })

  return (
    <Grid
      container
      maxWidth={{ xs: '90%', md: '75%' }}
      mx='auto'
      mt={16}
      flexWrap='wrap-reverse'
    >
      <Grid item xs={12} md={8} pr={{ md: 4 }}>
        <CarDesc />
        <Box textAlign='right'>
          <Btn>lanjutkan pembayaran</Btn>
        </Box>
      </Grid>
      <Grid item xs={12} md={4} mb={{ xs: 2, md: 0 }}>
        <CarDetailCard item={car} />
      </Grid>
    </Grid>
  )
}

export default Car
