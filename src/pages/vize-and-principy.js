import React, { useContext } from 'react'

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
import bannerSrc from '../../static/banners/banner-3.svg'
import babySrc from '../../static/fullscreen/garden-king.png'
import beeSrc from '../../static/fullscreen/bees.jpg'
import styled, { css } from 'styled-components'
import Seo from 'components/Seo'

export const Banner = styled(Div)`
  padding-top: 150px;
  background-repeat: no-repeat;
  background-size: 100% auto;
  position: relative;
  > ${Img} {
    margin: -200px auto;
  }

  ${({ theme }) => css`
    @media screen and (max-width: ${theme.breakpoints.md}) {
      min-height: auto;
      padding-top: 70px;
      > ${Img} {
        margin: 0 auto;
      }
    }
  `}
`

const CustomFlex = styled(Flex)`
  justify-content: space-around;
  padding: 40px;
  ${({ theme }) => css`
    @media screen and (max-width: ${theme.breakpoints.md}) {
      justify-content: space-between;
      > h1 {
        &:nth-child(2) {
          text-align: right;
        }
      }
    }
  `}
`

const VizePricipy = () => {
  return (
    <>
      <Seo />
      <Container>
        <Banner>
          <H1 textAlign="center">Vize & principy</H1>
          <Img m="0 auto" width="100%" src={bannerSrc} />
        </Banner>
      </Container>
      <CustomFlex>
        <H1>Péče o budoucnost</H1>
        <H1>Péče o zemi</H1>
      </CustomFlex>
      <CustomFlex>
        <H1>Péče o lidi</H1>
        <H1>Regulace konzumace</H1>
      </CustomFlex>
      <Img width="100%" src={babySrc} />
      <Section>
        <Container>
          <Div m="0 auto" maxWidth="1000px" textAlign="center">
            <H1>Cíle krátkodobé</H1>
            <Pragraph>
              Vybudovat a provozovat komunitní zahradu a malé hospodářství
              v centru Prahy.
            </Pragraph>
            <Pragraph mt="40px">
              Vytvořit odběrné místo pro produkty ekologicky hospodařících
              zemědělců.
            </Pragraph>
            <Pragraph mt="40px">
              Navazovat spolupráci a partnerství s podobně orientovanými celky i
              jednotlivci.
            </Pragraph>
            <H1 mt="100px">Cíle střednědobé</H1>
            <Pragraph mt="40px">
              Získat v Praze nebo blízkém okolí do užívání zemědělskou půdu a
              hospodářské zázemí.
            </Pragraph>
            <Pragraph mt="40px">
              Zahájit zemědělskou činnost, hospodařit ekologicky a udržitelně
              při dodržování permakulturních pravidel.
            </Pragraph>
            <H1 mt="100px">Cíle dlouhodobé</H1>
            <Pragraph mt="40px">
              Provozovat ukázkový, výnosný zemědělský celek fungující v souladu
              s přírodou a jejími principy.
            </Pragraph>
            <Pragraph
              cursor="pointer"
              onClick={() =>
                document
                  .getElementById('metrofarm-footer')
                  .scrollIntoView({ behavior: 'smooth' })
              }
              textDecoration="underline"
              mt="40px"
            >
              Zapojte se do toho s námi!
            </Pragraph>
          </Div>
        </Container>
      </Section>
      <Img width="100%" src={beeSrc} />
    </>
  )
}

export default VizePricipy
