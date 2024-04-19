import { NavLink } from 'react-router-dom'

export type navbarPage = { title: string; path: string }[]

interface NavbarProps {
  pages: navbarPage
}

const Navbar: React.FC<NavbarProps> = ({ pages }) => {
  return (
    <div>
      <p>Assignment 5</p>
      {pages.map((page) => (
        <NavLink to={page.path} key={page.path}>
          <p>{page.title}</p>
        </NavLink>
      ))}
    </div>
  )
}

export default Navbar
