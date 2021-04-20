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
  EndofList,
} from 'components/Elements'
import listSrc from '../../static/list/adopcni_listina_slepice.png'
import chickenSrc from '../../static/fullscreen/chicken.png'
import Gallery from 'components/Gallery'

import styled, { css } from 'styled-components'
import { navigate } from 'gatsby'
import Seo from 'components/Seo'
import { useIntl } from 'react-intl'

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

const Iframe = styled.iframe`
  width: 100%;
  height: calc(var(--main-width) * var(--aspect-ratio));
  vertical-align: top;
  border: none;
`

const AdopChicken = () => {
  const { formatMessage } = useIntl()
  return (
    <>
      <Seo />
      <Section>
        <Container>
          <Flex
            flexDirection="column"
            alignItems="center"
            maxWidth="80%"
            m=" 0 auto"
          >
            <H1 textAlign="center">{formatMessage({ id: 'hen-banner' })}</H1>
            <Pragraph textAlign="center" color="red">
              {formatMessage({ id: 'hen-banner-desc-0' })}
            </Pragraph>
            <Pragraph textAlign="center">
              {formatMessage({ id: 'hen-banner-desc-1' })}
            </Pragraph>
            <Pragraph textAlign="center">
              {formatMessage({ id: 'hen-banner-desc-2' })}
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
              {formatMessage({ id: 'hen-banner-action' })}
            </Pragraph>
          </Flex>
        </Container>
      </Section>
      <Iframe
        src="https://www.youtube.com/embed/r1ncaNxIc-4"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></Iframe>
      <Section bg="green" id="form">
        <Container>
          <H1 textAlign="center">{formatMessage({ id: 'hen-adoption' })}</H1>

          <CustomFlex>
            <Div pr="60px">
              <H2>{formatMessage({ id: 'hen-adoption-how' })}</H2>
              <ul>
                <ListItem>
                  {formatMessage({ id: 'hen-adoption-how-1' })}
                </ListItem>
                <ListItem>
                  {formatMessage({ id: 'hen-adoption-how-2' })}
                </ListItem>
                <ListItem>
                  {formatMessage({ id: 'hen-adoption-how-3' })}
                </ListItem>
                <ListItem>
                  {formatMessage({ id: 'hen-adoption-how-4' })}
                </ListItem>
              </ul>
              <EndofList m="40px 0 70px 0">
                – {formatMessage({ id: 'hen-adoption-how-5' })}
              </EndofList>
              <EndofList m="40px 0 70px 0">
                {formatMessage({ id: 'footer-bank-no' })}: 270228304/0300
              </EndofList>

              <Button
                onClick={() =>
                  navigate('/kontaktni-formular', { replace: true })
                }
              >
                {formatMessage({ id: 'hen-adoption-action' })}
              </Button>

              <Div mt="70px">
                <Span>
                  <Span ff="bold">
                    {formatMessage({ id: 'hen-adoption-contact' })}
                  </Span>
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
