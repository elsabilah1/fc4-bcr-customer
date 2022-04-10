import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import axios from 'axios'
import { Box, Typography } from '@mui/material'
import CarCard from '../components/CarCard'

const Cars = () => {
  const [searchParams] = useSearchParams()
  const [cars, setCars] = useState([])

  const baseUrl = 'https://rent-cars-api.herokuapp.com'

  const getFilteredCars = async (nameQuery) => {
    const res = await axios.get(baseUrl + '/customer/car')
    let resData = res.data

    if (nameQuery != null) {
      resData = resData.filter(
        (data) => data.category.toLowerCase() === nameQuery
      )
    }

    setCars(resData)
  }

  useEffect(() => {
    getFilteredCars(searchParams.get('cat'))
  })

  return (
    <Box
      width={{ md: '90%', lg: '75%' }}
      mx='auto'
      mt={15}
      display='flex'
      flexWrap='wrap'
      gap='2%'
      rowGap={3}
    >
      {cars ? (
        cars.map((car) => {
          return (
            <Box
              mx={{ xs: 'auto', md: 0 }}
              width={{ xs: '90%', md: '49%', lg: '32%' }}
              key={car.id}
            >
              <CarCard item={car} />
            </Box>
          )
        })
      ) : (
        <Typography>Empty List</Typography>
      )}
    </Box>
  )
}

export default Cars
