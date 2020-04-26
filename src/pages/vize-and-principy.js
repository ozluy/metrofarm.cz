import React, { useContext } from 'react'
import { DataContext } from 'layouts'
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
import styled from 'styled-components'

export const Banner = styled(Div)`
  height: 100vh;
  padding-top: 150px;
  background-repeat: no-repeat;
  background-size: 100% auto;
  position: relative;
  > ${Img} {
    position: absolute;
    top: 100px;
    left: 0;
    right: 0;
    z-index: -1;
  }
`

const VizePricipy = () => {
  const { pages } = useContext(DataContext)
  const contact = pages.filter(({ node }) => node.slug === 'contact')[0]
  if (!contact) {
    return null
  }
  const { content } = contact.node
  return (
    <>
      <Container>
        <Banner>
          <H1 textAlign="center">Vize & principy</H1>
          <Img m="0 auto" width="100%" maxWidth="1500px" src={bannerSrc} />
        </Banner>
        <Flex justifyContent="space-around">
          <H1>Péče o budoucnost</H1>
          <H1>Péče o zemi</H1>
        </Flex>
        <Flex justifyContent="space-around">
          <H1>Péče o lidi</H1>
          <H1>Regulace konzumace</H1>
        </Flex>
      </Container>
      <Img width="100%" src={babySrc} />
      <Section>
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
            Zahájit zemědělskou činnost, hospodařit ekologicky a udržitelně při
            dodržování permakulturních pravidel.
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
      </Section>
      <Img width="100%" src={beeSrc} />
    </>
  )
}

export default VizePricipy
