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
import gardenPlan from '../../static/garden_plan_bird_view.jpg'
import bannerSrc from '../../static/banners/banner-2.svg'
import listSrc from '../../static/list/zahonkova_listina.png'
import stepanSrc from '../../static/fullscreen/stepan_riha.jpg'
import styled, { css } from 'styled-components'
import Gallery from 'components/Gallery'
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

  ${({ theme }) => css`
    @media screen and (max-width: ${theme.breakpoints.md}) {
      height: auto;
      padding-top: 70px;
      > ${Img} {
        top: 50%;
        height: auto;
      }
    }
  `}
`

const RentGarden = () => {
  const { formatMessage } = useIntl()
  return (
    <>
      <Seo />
      <Container>
        <Banner>
          <Flex
            flexDirection="column"
            alignItems="center"
            maxWidth="900px"
            m=" 0 auto"
          >
            <H1 textAlign="center">{formatMessage({ id: 'garden-banner' })}</H1>
            <Pragraph color="red" textAlign="center">
              {formatMessage({ id: 'garden-banner-desc' })}
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
              {formatMessage({ id: 'garden-banner-action' })}
            </Pragraph>
          </Flex>
          <Img m="0 auto" width="100%" maxWidth="1500px" src={bannerSrc} />
        </Banner>
      </Container>
      <Section bg="brown" id="form" color="white">
        <Container>
          <H1 textAlign="center">{formatMessage({ id: 'garden-renting' })}</H1>

          <CustomFlex>
            <Div pr="60px">
              <H2>{formatMessage({ id: 'garden-renting-how' })}:</H2>
              <ul>
                <ListItem>
                  {formatMessage({ id: 'garden-renting-how-1' })}
                </ListItem>
                <ListItem>
                  {formatMessage({ id: 'garden-renting-how-2' })}
                </ListItem>
              </ul>
              <EndofList m="40px 0 40px 0">
                - {formatMessage({ id: 'garden-renting-how-7' })}
              </EndofList>
              <EndofList m="40px 0 40px 0">
                - {formatMessage({ id: 'garden-renting-how-7-following' })}
              </EndofList>
              <EndofList m="40px 0 40px 0">
                - {formatMessage({ id: 'garden-renting-how-7-following-2' })}
              </EndofList>
              <EndofList>
                <a href={gardenPlan} target="_blank" rel="noopener noreferrer">
                  {formatMessage({
                    id: 'garden-renting-plan-map',
                  })}
                </a>
              </EndofList>
              <EndofList
                mb="70px"
                dangerouslySetInnerHTML={{
                  __html: formatMessage({ id: 'garden-renting-example' }),
                }}
              ></EndofList>
              <Button
                onClick={() =>
                  navigate('/kontaktni-formular', { replace: true })
                }
              >
                {formatMessage({ id: 'garden-renting-action' })}
              </Button>

              <Div mt="70px">
                <Span>
                  <Span ff="bold">
                    {formatMessage({ id: 'garden-renting-contact' })}
                  </Span>
                  <Div mt="20px">Štěpán Říha</Div>
                  <Div>+420 725 307 598</Div>
                  <Div>stepan.riha@metrofarm.cz</Div>
                </Span>
              </Div>
            </Div>
            <Img height={{ lg: 800, md: 500 }} src={listSrc} />
          </CustomFlex>
        </Container>
      </Section>
      <Img width="100%" src={stepanSrc} />
      <Gallery />
    </>
  )
}

export default RentGarden
