import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export type navbarPage = { title: string; path: string }[]

interface NavbarProps {
  pages: navbarPage
}

const StyledNavbarContainer = styled.div`
  background-color: #f8f9fa;
  padding: 10px;
  display: flex;
  justify-content: space-evenly;
`

const StyledLink = styled(NavLink)`
  color: #007bff;
  text-decoration: none;
  margin: 0 10px;

  &:hover {
    color: #0056b3;
  }
`

const Navbar: React.FC<NavbarProps> = ({ pages }) => {
  return (
    <StyledNavbarContainer>
      {pages.map((page) => (
        <StyledLink to={page.path} key={page.path}>
          <p>{page.title}</p>
        </StyledLink>
      ))}
    </StyledNavbarContainer>
  )
}

export default Navbar
