import { Grid, Stack, Typography } from '@mui/material'
import Logo from './Logo'
import NavLinks from './NavLinks'
import SocialLinks from './SocialLinks'

const info = [
  'Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000',
  'binarcarrental@gmail.com',
  '081-233-334-808',
]

const Footer = () => {
  return (
    <Grid
      container
      maxWidth='lg'
      mx='auto'
      rowGap={4}
      px={2}
      mb={8}
      mt={20}
      justifyContent='space-between'
    >
      <Grid item xs={12} sm={5} md={3}>
        {info.map((item) => {
          return (
            <Typography variant='body' fontWeight={300} paragraph>
              {item}
            </Typography>
          )
        })}
      </Grid>
      <Grid item xs={12} sm={6} md={2}>
        <Stack spacing={2}>
          <NavLinks />
        </Stack>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Typography variant='body' fontWeight={300} paragraph>
          Connect with us
        </Typography>
        <Stack direction='row' spacing={2}>
          <SocialLinks />
        </Stack>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Typography variant='body' fontWeight={300} paragraph>
          Copyright Binar 2022
        </Typography>
        <Logo />
      </Grid>
    </Grid>
  )
}

export default Footer
