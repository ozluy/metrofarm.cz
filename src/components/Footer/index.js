import React from 'react'
import styled, { css } from 'styled-components'
import Container from 'components/Container'
import { Flex, Img, Span, Anchor, H1 } from 'components/Elements'
import mapSrc from '../../../static/footer/map.png'
import euSrc from '../../../static/footer/eu-logo.png'
import facebookSrc from '../../../static/footer/social/facebook.png'
import instagramSrc from '../../../static/footer/social/insta.png'

const Wrapper = styled.footer`
  padding: 70px 0;

  ${({ theme }) => css`
    @media screen and (max-width: ${theme.breakpoints.md}) {
      padding: 40px 0;
    }
  `}
`

const EnhancedFlex = styled(Flex)`
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;

  ${({ theme }) => css`
    @media screen and (max-width: ${theme.breakpoints.md}) {
      flex-direction: column;
      #map-wrapper {
        width: 100%;
        max-width: 100%;
        img {
          width: 100%;
          max-width: 100%;
        }
      }
    }
  `}
`

const CustomSpan = styled(Span)`
  max-width: 40%;

  ${({ theme }) => css`
    @media screen and (max-width: ${theme.breakpoints.md}) {
      max-width: 100%;
    }
  `}
`

const Footer = () => (
  <Wrapper id="metrofarm-footer">
    <H1 textAlign="center">Kontakt</H1>
    <Container>
      <EnhancedFlex>
        <CustomSpan>
          Železničářů 190, Praha 7, 170 00
          <br />
          <br />
          Koordinátor projektu a kontaktní osoba:
          <br />
          <br />
          Štěpán Říha
          <br />
          stepan.riha@metrofarm.cz
          <br />
          +420 725 307 598
          <br />
          <br />
          <br />
          Projekt MetroFarm je realizován ve spolupráci
          <br />
          zapsaných spolků.
          <br />
          <br />
          Spolek udržitelný rozvoj
          <br />
          Ostružinová 2455/11, 10600, Praha 10
          <br />
          IČ: 22880569
          <br />
          <br />
          Občanskému sdružení Alternativa II, z.s.
          <br />
          Terronská 894/56, 160 00, Praha 6
          <br />
          IČ:270 26 345
          <br />
          <br />
          <br />
          Partneři:
          <br />
          <br />
          <Img width="212px" src={euSrc} />
          <br />
          <br />
          <br />
          <Anchor
            rel="noreferrer noopener"
            target="_blank"
            title="MetroFarm on Instagram"
            alignItems="center"
            display="inline-flex"
            href="https://www.instagram.com/metrofarma/"
          >
            <Img src={instagramSrc} width="45px" />
            <Span m="20px">@metrofarma</Span>
          </Anchor>
          <br />
          <Anchor
            rel="noreferrer noopener"
            target="_blank"
            title="MetroFarm on Facebook"
            alignItems="center"
            display="inline-flex"
            href="https://www.facebook.com/MetroFarm-1308581092618428/"
          >
            <Img src={facebookSrc} width="45px" />
            <Span m="20px">MetroFarm</Span>
          </Anchor>
          <br />
          <Anchor
            rel="noreferrer noopener"
            target="_blank"
            title="Volnočasové centrum Holešovice on Facebook"
            alignItems="center"
            display="inline-flex"
            href="https://www.facebook.com/volnocasholesovice/"
          >
            <Img src={facebookSrc} width="45px" />
            <Span m="20px">Volnočasové centrum Holešovice</Span>
          </Anchor>
        </CustomSpan>
        <Anchor
          id="map-wrapper"
          maxWidth="55%"
          title="Open on Google Maps"
          href="https://goo.gl/maps/QCqe8XDDxwdogMx87"
          target="_blank"
          rel="noreferrer noopener"
          target="_blank"
        >
          <Img alt="Metrofarm address on Google Maps" src={mapSrc} />
        </Anchor>
      </EnhancedFlex>
    </Container>
  </Wrapper>
)

export default Footer
