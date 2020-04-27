import React, { useMemo, createContext } from 'react'
import { ThemeProvider } from 'styled-components'
import styled from 'styled-components'
import theme from 'common/theme'
import GlobalStyles from 'common/GlobalStyles'
import Footer from 'components/Footer'
import Header from 'components/Header'
import 'pure-react-carousel/dist/react-carousel.es.css'

const Main = styled.main`
  flex: 1;
  margin-top: -152px;
`


const Layout = ({ children }) => {
  const memoMain = useMemo(() => <Main>{children}</Main>, [children])

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        {memoMain}
        <Footer />
      </>
    </ThemeProvider>
  )
}

export default Layout
