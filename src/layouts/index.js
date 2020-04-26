import React, { useMemo, createContext } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
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

export const DataContext = createContext({ pages: [], posts: [] })

const Layout = ({ children }) => {
  const memoMain = useMemo(() => <Main>{children}</Main>, [children])

  const data = useStaticQuery(graphql`
    {
      allWordpressPage(sort: { fields: [title] }) {
        edges {
          node {
            id
            title
            slug
            content
          }
        }
      }
      allWordpressPost(sort: { fields: [date] }) {
        edges {
          node {
            id
            date(formatString: "ll")
            slug
            title
            content
          }
        }
      }
    }
  `)

  const contextData = {
    pages: data.allWordpressPage.edges,
    posts: data.allWordpressPost.edges,
  }

  return (
    <ThemeProvider theme={theme}>
      <DataContext.Provider value={contextData}>
        <GlobalStyles />
        <Header pages={contextData.pages} />
        {memoMain}
        <Footer />
      </DataContext.Provider>
    </ThemeProvider>
  )
}

export default Layout
