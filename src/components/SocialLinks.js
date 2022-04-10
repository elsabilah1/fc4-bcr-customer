import { Link } from '@mui/material'
import {
  FiInstagram,
  FiFacebook,
  FiTwitter,
  FiTwitch,
  FiMail,
} from 'react-icons/fi'

const SocialLink = ({ icon, path }) => {
  return (
    <Link
      p={1}
      href={path}
      color='#fff'
      fontSize={20}
      display='flex'
      bgcolor='#0D28A6'
      width='fit-content'
      borderRadius='100%'
    >
      {icon}
    </Link>
  )
}

const SocialLinks = () => {
  return (
    <>
      <SocialLink icon={<FiFacebook />} path='/' />
      <SocialLink icon={<FiInstagram />} path='/' />
      <SocialLink icon={<FiTwitter />} path='/' />
      <SocialLink icon={<FiMail />} path='/' />
      <SocialLink icon={<FiTwitch />} path='/' />
    </>
  )
}

export default SocialLinks
