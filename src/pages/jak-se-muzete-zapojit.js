import React from 'react'
import { navigate, replace } from 'gatsby'
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
import styled, { css } from 'styled-components'

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

const CustomFlex = styled(Flex)`
  background-color: ${({ theme }) => theme.colors.yellow};
  justify-content: space-around;
  flex-wrap: wrap;
  padding-top: 80px;
  flex-direction: row;

  ${({ theme }) => css`
    @media screen and (max-width: ${theme.breakpoints.lg}) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  `}
`

const ItemWrapper = styled(Div)`
  text-align: center;
  margin-bottom: 80px;
  width: 50%;

  ${({ theme }) => css`
    @media screen and (max-width: ${theme.breakpoints.lg}) {
      width: 95%;
    }
  `}
`

const HowItWorks = () => {
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
      <CustomFlex id="how-to">
        {listOfOptions.map(({ title, img, buttonText, desc }) => (
          <ItemWrapper key={title}>
            <Pragraph >{title} </Pragraph>
            <Div mb="40px">
              <Span>{desc}</Span>
            </Div>
            <Img height={{ lg: 800, md: 500 }} src={img} />
            <Div mt="40px">
              <Button
                onClick={() =>
                  navigate('/kontaktni-formular', { replace: true })
                }
              >
                {buttonText}
              </Button>
            </Div>
          </ItemWrapper>
        ))}
      </CustomFlex>
    </>
  )
}

export default HowItWorks
