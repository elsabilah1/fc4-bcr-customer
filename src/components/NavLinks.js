import { Link } from '@mui/material'

const NavLink = ({ children, path }) => {
  return (
    <Link variant='body' color='black' href={path} underline='none'>
      {children}
    </Link>
  )
}

const NavLinks = () => {
  return (
    <>
      <NavLink path='#ourservices'>Our Services</NavLink>
      <NavLink path='#whyus'>Why Us</NavLink>
      <NavLink path='#testimonial'>Testimonial</NavLink>
      <NavLink path='#faq'>FAQ</NavLink>
    </>
  )
}

export default NavLinks
