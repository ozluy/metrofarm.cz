import React, { useContext } from 'react'
import { navigate } from 'gatsby'

import Container from 'components/Container'
import styled, { css } from 'styled-components'
import bannerSrc from '../../static/banners/banner-1.svg'
import home1Src from '../../static/home/1.png'
import home2Src from '../../static/home/2.png'
import home3Src from '../../static/home/3.png'
import home4Src from '../../static/home/4.png'
import home5Src from '../../static/home/5.png'
import {
  Pragraph,
  Img,
  Div,
  H1,
  Flex,
  Anchor,
  Section,
} from 'components/Elements'
import Button from 'components/Button'
import Seo from 'components/Seo'
import { useIntl } from 'react-intl'

const offerList = formatMessage => [
  {
    title: formatMessage({ id: 'home-adopt-hen' }),
    desc: formatMessage({ id: 'home-adopt-hen-desc' }),
    buttonText: formatMessage({ id: 'home-adopt-hen-action' }),
    buttonAction: () => navigate('/adopce-slepice/', { replace: true }),
    img: home1Src,
    bg: 'brown',
  },
  {
    title: formatMessage({ id: 'home-rent-garden' }),
    desc: formatMessage({ id: 'home-rent-garden-desc' }),
    buttonText: formatMessage({ id: 'home-rent-garden-action' }),
    buttonAction: () => navigate('/vlastni-zahonek/', { replace: true }),
    img: home2Src,
    bg: 'green',
  },
  {
    title: formatMessage({ id: 'home-adopt-animal' }),
    desc: formatMessage({ id: 'home-adopt-animal-desc' }),
    buttonText: formatMessage({ id: 'home-adopt-animal-action' }),
    buttonAction: () => navigate('/adopte-koz-a-ovci/', { replace: true }),
    img: home3Src,
    bg: 'brown',
  },
  {
    title: formatMessage({ id: 'home-priciple-and-goal' }),
    desc: formatMessage({ id: 'home-priciple-and-goal-desc' }),
    buttonText: formatMessage({ id: 'home-priciple-and-goal-action' }),
    buttonAction: () => navigate('/vize-and-principy/', { replace: true }),
    img: home4Src,
    bg: 'yellow',
  },
  {
    title: formatMessage({ id: 'home-how-to-get-involved' }),
    desc: formatMessage({ id: 'home-how-to-get-involved-desc' }),
    buttonText: formatMessage({ id: 'home-how-to-get-involved-action' }),
    buttonAction: () => navigate('/jak-se-muzete-zapojit/', { replace: true }),
    img: home5Src,
    bg: 'green',
  },
]

const MetroOfferTextGroup = styled(Flex)`
  min-height: 100%;
  flex-direction: column;
  padding: 80px 80px;
  flex: 1;

  ${({ theme }) => css`
    @media screen and (max-width: ${theme.breakpoints.lg}) {
      padding: 40px;
    }
  `}

  ${({ theme }) => css`
    @media screen and (max-width: ${theme.breakpoints.md}) {
      padding: 16px;
    }
  `}
`

const MetroOfferImg = styled(Img)`
  min-height: 900px;
  ${({ theme }) => css`
    @media screen and (max-width: ${theme.breakpoints.lg}) {
      min-height: auto;
      max-height: 600px;
    }
  `}

  ${({ theme }) => css`
    @media screen and (max-width: ${theme.breakpoints.md}) {
      width: 100%;
      height: auto;
      max-height: 100%;
      min-height: auto;
    }
  `}
`

const MetroOffer = styled(Flex)`
  flex-direction: row;

  &:nth-child(odd) {
    flex-direction: row-reverse;

    ${MetroOfferTextGroup} {
      align-items: flex-end;
      text-align: right;
    }
  }

  ${({ theme }) => css`
    @media screen and (max-width: ${theme.breakpoints.md}) {
      flex-direction: column !important;

      ${MetroOfferTextGroup} {
        align-items: flex-start !important;
        text-align: left !important;
      }
    }
  `}
`

const BlackCircle = styled.div`
  height: 375px;
  width: 375px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.black};
  position: absolute;
  left: 0;
  bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  text-align: center;
  border-radius: 50%;

  ${({ theme }) => css`
    @media screen and (max-width: ${theme.breakpoints.lg}) {
      height: 250px;
      width: 250px;
      padding: 20px;
      left: 0;
    }
  `}
`

const BannerImg = styled(Img)`
  width: 100%;
  ${({ theme }) => css`
    @media screen and (max-width: ${theme.breakpoints.md}) {
      margin-top: 20px;
  `}
`

const Home = () => {
  const { formatMessage } = useIntl()
  return (
    <>
      <Seo />
      <Container>
        <BannerImg src={bannerSrc} />
        <Section>
          <Pragraph m="0 auto" maxWidth="1440px" textAlign="center">
            {formatMessage({ id: 'home-banner-text' })}
          </Pragraph>
          <Pragraph m="24px auto 0 auto" maxWidth="1440px" textAlign="center" color="red">
            {formatMessage({ id: 'home-banner-text-sub' })}
          </Pragraph>
          <Pragraph
            cursor="pointer"
            onClick={() =>
              document
                .getElementById('metrofarm-footer')
                .scrollIntoView({ behavior: 'smooth' })
            }
            textAlign="center"
            textDecoration="underline"
          >
            {formatMessage({ id: 'home-banner-link' })}
          </Pragraph>
        </Section>
      </Container>
      {offerList(formatMessage).map(
        ({ bg, title, img, desc, buttonText, buttonAction }, index) => (
          <MetroOffer key={title} bg={bg}>
            <MetroOfferTextGroup>
              <H1 {...(bg === 'brown' ? { color: 'white' } : {})}>{title}</H1>
              <Pragraph
                {...(bg === 'brown' ? { color: 'white' } : {})}
                maxWidth="500px"
              >
                {desc}
              </Pragraph>
              <Div mt="auto">
                <Button onClick={buttonAction}>{buttonText}</Button>
              </Div>
            </MetroOfferTextGroup>
            <Div position="relative">
              {index == 0 && (
                <BlackCircle>
                  <Pragraph>
                    {formatMessage({ id: 'home-adopt-hen-extra-desc' })}
                  </Pragraph>
                </BlackCircle>
              )}
              <MetroOfferImg src={img} />
            </Div>
          </MetroOffer>
        )
      )}
      <Container>
        <Section>
          <Flex
            m="0 auto"
            maxWidth="1024px"
            textAlign="center"
            alignItems="center"
            flexDirection="column"
          >
            <H1>{formatMessage({ id: 'home-dont-miss' })}</H1>

            <Pragraph>
              {formatMessage({ id: 'home-dont-miss-desc-1' })}
            </Pragraph>
            <Pragraph
              dangerouslySetInnerHTML={{
                __html: formatMessage({
                  id: 'home-dont-miss-desc-2',
                }),
              }}
            />
            <Pragraph>
              {formatMessage({ id: 'home-dont-miss-desc-3' })}
            </Pragraph>
          </Flex>
        </Section>
      </Container>
    </>
  )
}

export default Home
