import React, { useState } from 'react'
import onClickOutside from 'react-onclickoutside'
import { Link } from 'gatsby'
import Container from 'components/Container'
import Moon from 'components/Icon/moon'
import Sun from 'components/Icon/sun'
import TextSize from 'components/Icon/textSize'
import Icon from 'components/Icon'
import { Wrapper, Navbar, Logo, Burger, Nav, Piece } from './styled'
import MetroFarmLogo from 'components/MetroFarmLogo'
import theme from 'common/theme'

const EnhancedNavBar = onClickOutside(props => <Navbar {...props} />)

const Header = ({ pages }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const navigationList = [
    { url: '/adopce-slepice/', title: 'Adopce slepice' },
    { url: '/vlastni-zahonek/', title: 'Vlastní záhonek' },
    { url: '/adopte-koz-a-ovci/', title: 'Adopce koz a ovcí' },
    { url: '/vize-and-principy/', title: 'Vize & Principy' },
    { url: '/jak-se-muzete-zapojit/', title: 'Jak se můžete zapojit?' },
  ]
  return (
    <Wrapper>
      <Container>
        <Logo>
          <Link to="/">
            <MetroFarmLogo />
          </Link>
        </Logo>
        <EnhancedNavBar handleClickOutside={() => setMenuOpen(false)}>
          <Burger open={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            <Piece />
            <Piece />
            <Piece />
          </Burger>
          <Nav open={menuOpen}>
            {navigationList.map(({ title, url }) => (
              <Link
              activeStyle={{ color: theme.colors.green }}
               onClick={() => setMenuOpen(false)} key={title} to={url}>
                {title}
              </Link>
            ))}
            <a
              href={null}
              onClick={() => {
                setMenuOpen(false)
                document
                  .getElementById('metrofarm-footer')
                  .scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Kontakt
            </a>
          </Nav>
        </EnhancedNavBar>
      </Container>
    </Wrapper>
  )
}

export default Header
