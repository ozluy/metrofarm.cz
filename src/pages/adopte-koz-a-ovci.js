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
  ListItem,
} from 'components/Elements'
import listSrc from '../../static/list/adopcni_listina_ovce.jpg'
import listSrc2 from '../../static/list/adopcni_listina_koza.jpg'
import goatSheepSrc from '../../static/fullscreen/goats-and-sheeps.png'
import styled from 'styled-components'
import Gallery from 'components/Gallery'

const CustomImg = styled(Img)`
  position: absolute;
  right: 150px;
  top: 250px;
`

const AdopSheepOrGoat = () => {
  const { pages } = useContext(DataContext)
  const contact = pages.filter(({ node }) => node.slug === 'contact')[0]
  if (!contact) {
    return null
  }
  const { content } = contact.node
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
            <H1 textAlign="center">Adopce koz a ovcí</H1>
            <Pragraph textAlign="center">
              Kromě slepic máme na farmě také kozy a ovce. Učíme nejen sebe, ale
              také děti a jejich rodiče, co všechno chov hospodářských zvířat
              obnáší. Učíme se vážit si jiných tvorů a oceňovat práci lidí,
              kteří pro nás kvalitní potraviny vyrábějí. Náš chov můžete
              podpořit nejen fyzicky, a to pomocí s údržbou prostorů pro zvířata
              a pomocí s každodenní péčí, ale i adopcí vybrané ovečky nebo kozy.
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
              Chci adoptovat!
            </Pragraph>
          </Flex>
        </Container>
      </Section>
      <Img width="100%" src={goatSheepSrc} />
      <Section bg="green" id="form" color="white">
        <Container>
          <H1 textAlign="center">Adopce</H1>

          <Flex flexDirection="row" justifyContent="space-between">
            <Div maxWidth={{ lg: '700px', md: '500px' }}>
              <H2>Základní členství obsahuje:</H2>
              <ul>
                <ListItem>Certifikát.</ListItem>
                <ListItem>Kozí mléko dle aktuální dojivosti.</ListItem>
                <ListItem>Možnost naučit se podojit kozu.</ListItem>
                <ListItem>
                  Možnost naučit se spřádat ovčí vlnu na vřeténku na jedné z
                  našich akcí.
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
                Chci adoptovat ovci
              </Button>
              <Pragraph mt="30px"></Pragraph>
              <Button
                onClick={() =>
                  document
                    .getElementById('metrofarm-footer')
                    .scrollIntoView({ behavior: 'smooth' })
                }
              >
                Chci adoptovat kozu
              </Button>
              <Div mt="70px">
                <Span>
                  <Span ff="bold">Pro více informací kontaktujte</Span>
                  <Div mt="20px">Tereza Janovská</Div>
                  <Div>420 737 670 019</Div>
                  <Div>tereza@janovsky.eu</Div>
                  <Div mt="20px">Štěpán Říha</Div>
                  <Div>+420 725 307 598</Div>
                  <Div>stepan.riha@metrofarm.cz</Div>
                </Span>
              </Div>
            </Div>
            <Img height={{ lg: 800, mg: 500 }} src={listSrc2} />
            <CustomImg height={{ lg: 800, md: 500 }} src={listSrc} />
          </Flex>
        </Container>
      </Section>
      <Gallery listName="sheepandgoat" />
    </>
  )
}

export default AdopSheepOrGoat
