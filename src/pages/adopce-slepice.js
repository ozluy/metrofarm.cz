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
import listSrc from '../../static/list/adopcni_listina_slepice.jpg'
import chickenSrc from '../../static/fullscreen/chicken.png'
import Gallery from 'components/Gallery'

import styled, { css } from 'styled-components'

const CustomFlex = styled(Flex)`
  flex-direction: row;

  ${({ theme }) => css`
    @media screen and (max-width: ${theme.breakpoints.lg}) {
      flex-direction: column-reverse;

      img {
        display: none;
      }
    }
  `}
`

const AdopChicken = () => {
  return (
    <>
      <Section>
        <Container>
          <Flex
            flexDirection="column"
            alignItems="center"
            maxWidth="80%"
            m=" 0 auto"
          >
            <H1 textAlign="center">Adopce slepice</H1>
            <Pragraph textAlign="center">
              Většinu slepic jsme vykoupili z klecových velkochovů a dáváme jim
              nový domov. Holky se prohání na čerstvém vzduchu, vyhřívají na
              slunci, popelí ve svých jamkách, schovávají před deštěm a
              přetahují o právě nahrabané červíky. Mají více prostoru, svobody a
              mohou projevovat svoje přirozené chování. Dávají nám vajíčka a
              dělají společnost.
            </Pragraph>
            <Pragraph textAlign="center">
              Kromě toho nám ale i pomáhají s údržbou trávníku, hnojením záhonů,
              recyklací bioodpadu ze záhonů a občas i z našich domácností.
              Nejsou to jen stroje na vajíčka, ale i zahradníci a parťáci.
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
              Adoptujte si slepici!
            </Pragraph>
          </Flex>
        </Container>
      </Section>
      <Img width="100%" src={chickenSrc} />
      <Section bg="green" id="form" color="white">
        <Container>
          <H1 textAlign="center">Adopce</H1>

          <CustomFlex>
            <Div pr="60px">
              <H2>Základní členství obsahuje:</H2>
              <ul>
                <ListItem>Dostanete certifikát.</ListItem>
                <ListItem>Můžete slepici pojmenovat.</ListItem>
                <ListItem>
                  Vámi vybraná slepice dostane unikátní kroužek.
                </ListItem>
                <ListItem>
                  Každý měsíc si můžete vyzvednout 20 vajec od našich slepiček.
                </ListItem>
              </ul>
              <Pragraph m="40px 0 70px 0">– To vše za 250 Kč/měsíc.</Pragraph>
              <Button
                onClick={() =>
                  document
                    .getElementById('metrofarm-footer')
                    .scrollIntoView({ behavior: 'smooth' })
                }
              >
                Chci adoptovat slepici
              </Button>

              <Div mt="70px">
                <Span>
                  <Span ff="bold">Pro více informací kontaktujte</Span>
                  <Div mt="20px">Štěpán Říha</Div>
                  <Div>+420 725 307 598</Div>
                  <Div>stepan.riha@metrofarm.cz</Div>
                  <Div mt="20px">Vendula Procházková</Div>
                  <Div>+420 737 481 044</Div>
                  <Div>vendula.prochazkova@email.cz</Div>
                </Span>
              </Div>
            </Div>
            <Img height={{ lg: 800, md: 500 }} src={listSrc} />
          </CustomFlex>
        </Container>
      </Section>
      <Gallery listName="chicken" />
    </>
  )
}

export default AdopChicken
