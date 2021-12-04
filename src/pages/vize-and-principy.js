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
import babySrc from '../../static/fullscreen/community.jpg'
import beeSrc from '../../static/fullscreen/bees.jpg'
import styled, { css } from 'styled-components'
import Seo from 'components/Seo'
import { useIntl } from 'react-intl'

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
  const { formatMessage } = useIntl()
  return (
    <>
      <Seo />
      <Container>
        <Banner>
          <H1 textAlign="center">{formatMessage({ id: 'vision-title' })}</H1>
          <Img m="0 auto" width="100%" src={bannerSrc} />
        </Banner>
      </Container>
      <CustomFlex>
        <H1>{formatMessage({ id: 'vision-1' })}</H1>
        <H1>{formatMessage({ id: 'vision-2' })}</H1>
      </CustomFlex>
      <CustomFlex>
        <H1>{formatMessage({ id: 'vision-3' })}</H1>
        <H1>{formatMessage({ id: 'vision-4' })}</H1>
      </CustomFlex>
      <Img width="100%" src={babySrc} />
      <Section>
        <Container>
          <Div m="0 auto" maxWidth="1000px" textAlign="center">
            <H1>{formatMessage({ id: 'vision-short-term' })}</H1>
            <Pragraph>{formatMessage({ id: 'vision-short-term-1' })}</Pragraph>
            <Pragraph mt="40px">
              {formatMessage({ id: 'vision-short-term-2' })}
            </Pragraph>
            <Pragraph mt="40px">
              {formatMessage({ id: 'vision-short-term-3' })}
            </Pragraph>
            <H1 mt="100px">{formatMessage({ id: 'vision-medium-term' })}</H1>
            <Pragraph mt="40px">
              {formatMessage({ id: 'vision-medium-term-1' })}
            </Pragraph>
            <Pragraph mt="40px">
              {formatMessage({ id: 'vision-medium-term-2' })}
            </Pragraph>
            <H1 mt="100px">{formatMessage({ id: 'vision-long-term' })}</H1>
            <Pragraph mt="40px">
              {formatMessage({ id: 'vision-long-term-1' })}
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
              {formatMessage({ id: 'vision-action' })}
            </Pragraph>
          </Div>
        </Container>
      </Section>
      <Img width="100%" src={beeSrc} />
    </>
  )
}

export default VizePricipy
