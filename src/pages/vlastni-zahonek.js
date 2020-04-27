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
  ListItem,
} from 'components/Elements'
import bannerSrc from '../../static/banners/banner-2.svg'
import listSrc from '../../static/list/zahonkova_listina.jpg'
import stepanSrc from '../../static/fullscreen/stepan_riha.jpg'
import styled from 'styled-components'
import Gallery from 'components/Gallery'

export const Banner = styled(Div)`
  height: 100vh;
  padding-top: 150px;
  background-repeat: no-repeat;
  background-size: 100% auto;
  position: relative;
  overflow: hidden;
  > ${Img} {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
  }
`

const RentGarden = () => {
 
  return (
    <>
      <Container>
        <Banner>
          <Flex
            flexDirection="column"
            alignItems="center"
            maxWidth="650px"
            m=" 0 auto"
          >
            <H1 textAlign="center">Vlastní záhonek</H1>
            <Pragraph textAlign="center">
              Místa máme dost a vítáni jsou jak úplní začátečníci, tak ostřílení
              zemědělci.
            </Pragraph>
            <Pragraph
              cursor="pointer"
              textDecoration="underline"
              onClick={() =>
                document
                  .getElementById('form')
                  .scrollIntoView({ behavior: 'smooth' })
              }
            >
              Přidejte se!
            </Pragraph>
          </Flex>
          <Img m="0 auto" width="100%" maxWidth="1500px" src={bannerSrc} />
        </Banner>
      </Container>
      <Section bg="brown" id="form" color="white">
        <Container>
          <H1 textAlign="center">Vlastní záhonek</H1>

          <Flex flexDirection="row">
            <Div pr="60px">
              <H2>Základní členství obsahuje:</H2>
              <ul>
                <ListItem>
                  5 m2 zahradníkem nedotčeného pěstebního prostoru, který čeká
                  na ukázku Vašich zahradnických dovedností.
                </ListItem>
                <ListItem>Zahradnické nářadí.</ListItem>
                <ListItem>Vodu na zalévání, ale ne na plýtvání.</ListItem>
                <ListItem>
                  Kompost, hnůj, štěpku, dřevo a stavební materiál na
                  zúrodňování a zkrášlování Vašich záhonků.
                </ListItem>
                <ListItem>Parkoviště pro ty, co nenechají auto doma.</ListItem>
                <ListItem> 3 ha oplocené louky na vyřádění. </ListItem>
              </ul>
              <Pragraph m="40px 0 70px 0">
                - Členský příspěvek na rok 2020 je 1 300 Kč.
              </Pragraph>
              <Button
                onClick={() =>
                  document
                    .getElementById('metrofarm-footer')
                    .scrollIntoView({ behavior: 'smooth' })
                }
              >
                Chci vlastní záhon
              </Button>

              <Div mt="70px">
                <Span>
                  <Span ff="bold">Pro více informací kontaktujte</Span>
                  <Div mt="20px">Štěpán Říha</Div>
                  <Div>+420 725 307 598</Div>
                  <Div>stepan.riha@metrofarm.cz</Div>
                </Span>
              </Div>
            </Div>
            <Img height={{ lg: 800, md: 500 }} src={listSrc} />
          </Flex>
        </Container>
      </Section>
      <Img width="100%" src={stepanSrc} />
      <Gallery />
    </>
  )
}

export default RentGarden
