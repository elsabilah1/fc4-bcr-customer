import { useState } from 'react'
import Btn from './Btn'
import { FiChevronDown, FiUsers, FiClock } from 'react-icons/fi'
import { Box, MenuItem } from '@mui/material'
import * as router from 'react-router-dom'
import FormWrapper from './FormWrapper'
import InputField from './InputField'

const initialState = {
  tipeDriver: '',
  tanggal: new Date().toJSON().slice(0, 10),
  waktuJemput: '',
  jumlahPenumpang: 0,
}

const CarFilter = () => {
  const { carId } = router.useParams()
  const location = router.useLocation()
  const navigate = router.useNavigate()

  const [formValues, setFormValues] = useState(initialState)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    navigate({
      pathname: '/car',
      search:
        formValues.tipeDriver &&
        `?${router.createSearchParams({ cat: formValues.tipeDriver })}`,
    })
  }

  const formWidth = { xs: '100%', md: carId ? '25%' : '20%' }

  return (
    <FormWrapper handleSubmit={handleSubmit}>
      <Box width={formWidth}>
        <InputField
          type='select'
          name='tipeDriver'
          value={formValues.tipeDriver}
          label='Tipe Driver'
          onChange={handleInputChange}
          placeholder='Pilih Tipe Driver'
          icon={
            <FiChevronDown
              size={24}
              color='#8A8A8A'
              style={{ marginRight: 12 }}
            />
          }
        >
          <MenuItem key='small' value='small'>
            Small
          </MenuItem>
          <MenuItem key='medium' value='medium'>
            Medium
          </MenuItem>
          <MenuItem key='large' value='large'>
            Large
          </MenuItem>
        </InputField>
      </Box>
      <Box width={formWidth}>
        <InputField
          type='date'
          name='tanggal'
          value={formValues.tanggal}
          label='Tanggal'
          onChange={handleInputChange}
        />
      </Box>
      <Box width={formWidth}>
        <InputField
          type='select'
          name='waktuJemput'
          value={formValues.waktuJemput}
          onChange={handleInputChange}
          label='Waktu Jemput/Ambil'
          placeholder='Pilih Waktu'
          icon={
            <FiClock size={24} color='#8A8A8A' style={{ marginRight: 12 }} />
          }
        >
          <MenuItem key='8' value='8'>
            08.00
          </MenuItem>
          <MenuItem key='9' value='9'>
            09.00
          </MenuItem>
        </InputField>
      </Box>
      <Box width={formWidth}>
        <InputField
          type='number'
          name='jumlahPenumpang'
          value={formValues.jumlahPenumpang}
          onChange={handleInputChange}
          label='Jumlah Penumpang (optional)'
          icon={<FiUsers />}
        />
      </Box>
      {!carId &&
        (location.pathname === '/car' ? (
          <Btn outlinedPrimary type='submit'>
            edit
          </Btn>
        ) : (
          <Btn type='submit'>cari mobil</Btn>
        ))}
    </FormWrapper>
  )
}

export default CarFilter
