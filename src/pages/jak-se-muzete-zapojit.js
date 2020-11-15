import React from 'react'
import { navigate, replace, Link } from 'gatsby'
import Container from 'components/Container'
import Button from 'components/Button'
import {
  Div,
  Flex,
  Img,
  Section,
  H1,
  H2,
  Pragraph,
  Span,
} from 'components/Elements'
// import listSrcOvce from '../../static/list/adopcni_listina_ovce.png'
// import listSrcKoza from '../../static/list/adopcni_listina_koza.png'
import listSrcSlepice from '../../static/list/adopcni_listina_slepice.png'
import listSrcZahonkova from '../../static/list/zahonkova_listina.png'
import styled, { css } from 'styled-components'
import Seo from 'components/Seo'
import Gallery from 'components/Gallery'
import { useIntl } from 'react-intl'

const listOfOptions = formatMessage => [
  {
    title: formatMessage({ id: 'involve-hen' }),
    desc: formatMessage({ id: 'involve-adopt' }),
    img: listSrcSlepice,
    link: '/adopce-slepice/',
    buttonText: formatMessage({ id: 'involve-hen-action' }),
  },
  {
    title: formatMessage({ id: 'involve-garden' }),
    desc: formatMessage({ id: 'involve-rent' }),
    img: listSrcZahonkova,
    link: '/vlastni-zahonek/',
    buttonText: formatMessage({ id: 'involve-garden-action' }),
  },
  // {
  //   title: formatMessage({ id: 'involve-goat' }),
  //   desc: formatMessage({ id: 'involve-adopt' }),
  //   img: listSrcKoza,
  //   link: '/adopte-koz-a-ovci/',
  //   buttonText: formatMessage({ id: 'involve-goat-action' }),
  // },
  // {
  //   title: formatMessage({ id: 'involve-sheep' }),
  //   desc: formatMessage({ id: 'involve-adopt' }),
  //   img: listSrcOvce,
  //   link: '/adopte-koz-a-ovci/',
  //   buttonText: formatMessage({ id: 'involve-sheep-action' }),
  // },
]

const CustomFlex = styled(Flex)`
  background-color: ${({ theme }) => theme.colors.yellow};
  justify-content: space-around;
  flex-wrap: wrap;
  padding-top: 80px;
  flex-direction: row;

  ${({ theme }) => css`
    @media screen and (max-width: ${theme.breakpoints.md}) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-top: 0px;
    }
  `}
`

const ItemWrapper = styled(Div)`
  text-align: center;
  margin-bottom: 80px;
  width: 48%;

  ${({ theme }) => css`
    @media screen and (max-width: ${theme.breakpoints.md}) {
      padding: 16px;
      width: 100%;
      margin-bottom: 0px;
    }
  `}
`

const HowItWorks = () => {
  const { formatMessage } = useIntl()
  return (
    <>
      <Seo />
      <Section>
        <Container>
          <Flex
            flexDirection="column"
            alignItems="center"
            maxWidth="1000px"
            m=" 0 auto"
          >
            <H1 textAlign="center">{formatMessage({ id: 'involve-title' })}</H1>
            <Pragraph textAlign="center">
              {formatMessage({ id: 'involve-desc' })}
            </Pragraph>

            <Pragraph
              cursor="pointer"
              textDecoration="underline"
              textAlign="center"
              maxWidth="1000px"
              onClick={() =>
                document
                  .getElementById('how-to')
                  .scrollIntoView({ behavior: 'smooth' })
              }
            >
              {formatMessage({ id: 'involve-link' })}
            </Pragraph>
          </Flex>
        </Container>
      </Section>
      <CustomFlex id="how-to">
        {listOfOptions(formatMessage).map(
          ({ title, img, buttonText, desc, link }) => (
            <ItemWrapper key={title}>
              <Pragraph>{title} </Pragraph>
              <Div mb={{ sm: '10px', md: '20px', lg: '40px' }}>
                <Span>
                  {desc}
                  <Link to={link}>
                    <Span color="black" textDecoration="underline">
                      {formatMessage({ id: 'involve-here' })}
                    </Span>
                  </Link>
                  .
                </Span>
              </Div>
              <Img height={{ lg: 800, md: 500 }} src={img} />
              <Div mt={{ sm: '10px', md: '20px', lg: '40px' }}>
                <Button
                  onClick={() =>
                    navigate('/kontaktni-formular', { replace: true })
                  }
                >
                  {buttonText}
                </Button>
              </Div>
            </ItemWrapper>
          )
        )}
      </CustomFlex>
      <Gallery listName="howToGetInvolved" />
    </>
  )
}

export default HowItWorks
