import { Link } from '@mui/material'
import LogoImg from '../assets/images/logo.png'
const Logo = () => {
  return (
    <Link href='/'>
      <img src={LogoImg} alt='Logo' />
    </Link>
  )
}

export default Logo
