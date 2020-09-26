import React, { useState, Component, useContext } from 'react'
import { useIntl } from 'react-intl'
import onClickOutside from 'react-onclickoutside'
import { Link } from 'gatsby'
import Container from 'components/Container'
import Moon from 'components/Icon/moon'
import Sun from 'components/Icon/sun'
import TextSize from 'components/Icon/textSize'
import Icon from 'components/Icon'
import {
  Wrapper,
  Navbar,
  Logo,
  Burger,
  Nav,
  Piece,
  LangSelection,
  LangOption,
} from './styled'
import MetroFarmLogo from 'components/MetroFarmLogo'
import LanguageContext from 'components/LanguageContex'
import theme from 'common/theme'
import { Anchor } from 'components/Elements'

class NavBarComp extends Component {
  render() {
    return <Navbar {...this.props} />
  }
}

const EnhancedNavBar = onClickOutside(NavBarComp)

const Header = ({ pages }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const langContext = useContext(LanguageContext)
  const intl = useIntl()
  const navigationList = [
    {
      url: '/adopce-slepice/',
      title: intl.formatMessage({ id: 'header-nav-adoption-chicken' }),
    },
    {
      url: '/vlastni-zahonek/',
      title: intl.formatMessage({ id: 'header-nav-rent-garden' }),
    },
    {
      url: '/adopte-koz-a-ovci/',
      title: intl.formatMessage({ id: 'header-nav-adoption-sheep-and-goat' }),
    },
    {
      url: '/vize-and-principy/',
      title: intl.formatMessage({ id: 'header-nav-vision-and-principle' }),
    },
    {
      url: '/jak-se-muzete-zapojit/',
      title: intl.formatMessage({ id: 'header-nav-how-to-get-involved' }),
    },
    {
      url: '/kontaktni-formular/',
      title: intl.formatMessage({ id: 'header-nav-contact' }),
      action: true,
    },
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
            <LangSelection onClick={event => event.stopPropagation()}>
              <LangOption
                active={langContext.lang === 'cs'}
                onClick={() => langContext.setLang('cs')}
              >
                Čeština
              </LangOption>
              |
              <LangOption
                active={langContext.lang === 'en'}
                onClick={() => langContext.setLang('en')}
              >
                English
              </LangOption>
            </LangSelection>
          </Burger>
          <Nav open={menuOpen}>
            {navigationList.map(({ title, url, action }) =>
              !action ? (
                <Link
                  activeStyle={{ color: theme.colors.green }}
                  onClick={() => setMenuOpen(false)}
                  key={title}
                  to={url}
                >
                  {title}
                </Link>
              ) : (
                <Anchor
                  onClick={() => {
                    setMenuOpen(false)
                    document
                      .getElementById('metrofarm-footer')
                      .scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                        inline: 'nearest',
                      })
                  }}
                  href={null}
                  key={title}
                >
                  {title}
                </Anchor>
              )
            )}
          </Nav>
        </EnhancedNavBar>
      </Container>
    </Wrapper>
  )
}

export default Header
