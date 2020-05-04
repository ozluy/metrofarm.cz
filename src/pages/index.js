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

const offerList = [
  {
    title: 'Adopce slepice',
    desc: `Protože nechceme kupovat vejce z klecových chovů, rozhodli jsme se společně chovat slepice ve volném výběhu v naší METRO FARM.`,
    buttonText: 'Více o adopci',
    buttonAction: () => navigate('/adopce-slepice/', { replace: true }),
    img: home1Src,
    bg: 'brown',
  },
  {
    title: 'Vlastní záhonek',
    desc: `Místa máme dost a vítáni jsou jak úplní začátečníci, tak ostřílení zemědělci.`,
    buttonText: 'Více o záhoncích',
    buttonAction: () => navigate('/vlastni-zahonek/', { replace: true }),
    img: home2Src,
    bg: 'green',
  },
  {
    title: 'Adopce koz a ovcí',
    desc: `Kromě slepic máme na farmě také kozy, ovce, včely a v roce 2020 plánujeme přibrat i další zvířata.`,
    buttonText: 'Více o adopci zvířat',
    buttonAction: () => navigate('/adopte-koz-a-ovci/', { replace: true }),
    img: home3Src,
    bg: 'brown',
  },
  {
    title: 'Principy & cíle',
    desc: `Víme, jak zadržovat vodu v krajině, fixovat CO2 v půdě, zvyšovat biodiverzitu. Umíme pěstovat plodiny bez umělých hnojiv. Víme, jak hospodařit udržitelně. Když se chce, všechno jde.`,
    buttonText: 'Více',
    buttonAction: () => navigate('/vize-and-principy/', { replace: true }),
    img: home4Src,
    bg: 'yellow',
  },
  {
    title: 'Jak se můžu zapojit?',
    desc: `Můžete s námi například pečovat o zvířata, starat se o společné záhony nebo si zde realizovat vlastní projekt. Místa máme dost.`,
    buttonText: 'Více',
    buttonAction: () => navigate('/adopte-koz-a-ovci/', { replace: true }),
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
  left: ${375 / -2}px;
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
const Home = () => {
  return (
    <>
      <Seo />
      <Container>
        <Div>
          <Img width="100%" src={bannerSrc} />
        </Div>
        <Section>
          <Pragraph m="0 auto" maxWidth="1440px" textAlign="center">
            Vítejte na stránkách komunitní zahrady Metro Farm. Na naší zahradě
            se snažíme nejen pěstovat, kompostovat, recyklovat a udržitelně
            spravovat náš kousek země, ale také zde chováme drobné hospodářské
            zvířectvo. Místa máme dost a vítáni jsou jak úplní začátečníci, tak
            ostřílení zemědělci.
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
            Přijďte nás navštívit!
          </Pragraph>
        </Section>
      </Container>
      {offerList.map(
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
              <Button maxWidth="250px" mt="auto" onClick={buttonAction}>
                {buttonText}
              </Button>
            </MetroOfferTextGroup>
            <Div position="relative">
              {index == 0 && (
                <BlackCircle>
                  <Pragraph>
                    V ČR se chová téměř 6 milionů nosnic ve velkochovech.
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
            <H1>Nepřehlédněte</H1>

            <Pragraph>
              Sociální zázemí máme v blízké hlavní budově nebo u našeho
              parkoviště.
            </Pragraph>
            <Pragraph>
              Hlavní budova
              <Anchor
                target="_blank"
                textDecoration="underline"
                rel="noreferrer noopener"
                href="https://www.facebook.com/volnocasholesovice/"
              >
                {' '}
                Volnočasového centra Holešovice{' '}
              </Anchor>
              Vás také láká na svůj klubový bar zásobený nealko i alko nápoji
              otevřený každý den od 15:15.
            </Pragraph>
            <Pragraph>
              Zahradu stále budujeme. Budeme rádi, pokud se do tohoto nejen
              tvůrčího, ale i seznamovacího procesu více či méně zapojíte.
            </Pragraph>
          </Flex>
        </Section>
      </Container>
    </>
  )
}

export default Home
