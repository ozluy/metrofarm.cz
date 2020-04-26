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
import listSrcOvce from '../../static/list/adopcni_listina_ovce.jpg'
import listSrcKoza from '../../static/list/adopcni_listina_koza.jpg'
import listSrcSlepice from '../../static/list/adopcni_listina_slepice.jpg'
import listSrcZahonkova from '../../static/list/zahonkova_listina.jpg'
import styled from 'styled-components'

const listOfOptions = [
  {
    title: 'Adoptuj si slepici',
    desc: 'Odpovědi na své otázky ohledně adopce najdeš zde.',
    img: listSrcSlepice,
    buttonText: 'Chci si adoptovat slepici',
  },
  {
    title: 'Chcete si pronajmout zahradu?',
    desc: 'Odpovědi na své otázky ohledně pronájmu najdeš zde.',
    img: listSrcZahonkova,
    buttonText: 'Chci si pronajmout zahradu',
  },
  {
    title: 'Adoptuj si kozu',
    desc: 'Odpovědi na své otázky ohledně adopce najdeš zde.',
    img: listSrcKoza,
    buttonText: 'Chci si adoptovat kozu',
  },
  {
    title: 'Adoptuj si ovci ',
    desc: 'Odpovědi na své otázky ohledně adopce najdeš zde.',
    img: listSrcOvce,
    buttonText: 'Chci si adoptovat ovci',
  },
]

const HowItWorks = () => {
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
            maxWidth="1000px"
            m=" 0 auto"
          >
            <H1 textAlign="center">Zapojte se!</H1>
            <Pragraph textAlign="center">
              Naše zahrada a hospodářství se stále budují a vylepšují a náš
              projekt stále roste. Možností, jak se umazat, zpotit a užít si
              pražské farmářské dobrodružství, je mnoho. Společně se staráme o
              zvířata, pracujeme na společných záhonech, zkrášlujeme společné
              prostory. Každý dobrovolník je vítán.
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
              Můžete si u nás samozřejmě také vytvořit vlastní záhon nebo
              adoptovat slepici, kozu či ovci.
            </Pragraph>
          </Flex>
        </Container>
      </Section>
      <Flex
        bg="yellow"
        id="how-to"
        justifyContent="space-around"
        flexWrap="wrap"
        pt="80px"
      >
        {listOfOptions.map(({ title, img, buttonText, desc }) => (
          <Div key={title} textAlign="center" mb="80px" width="50%">
            <Pragraph>{title} </Pragraph>
            <Div mb="40px">
              <Span>{desc}</Span>
            </Div>
            <Img height={{ lg: 800, md: 500 }} src={img} />
            <Div mt="40px">
              <Button
                onClick={() =>
                  document
                    .getElementById('metrofarm-footer')
                    .scrollIntoView({ behavior: 'smooth' })
                }
              >
                {buttonText}
              </Button>
            </Div>
          </Div>
        ))}
      </Flex>
    </>
  )
}

export default HowItWorks
