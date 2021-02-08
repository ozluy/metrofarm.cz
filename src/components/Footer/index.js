import React from 'react'
import styled, { css } from 'styled-components'
import Container from 'components/Container'
import { Flex, Img, Span, Anchor, H1 } from 'components/Elements'
import mapSrc from '../../../static/footer/metrofarm_on_map.png'
import euSrc from '../../../static/footer/logo_praha7.png'
import blueboardSrc from '../../../static/footer/blueboard-logo.png'

import facebookSrc from '../../../static/footer/social/facebook.png'
import instagramSrc from '../../../static/footer/social/insta.png'
import { useIntl } from 'react-intl'

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

const Footer = () => {
  const intl = useIntl()

  return (
    <Wrapper id="metrofarm-footer">
      <H1 textAlign="center">{intl.formatMessage({ id: 'footer-title' })}</H1>
      <Container>
        <EnhancedFlex>
          <CustomSpan>
            Císařský ostrov, Praha 7, 170 00
            <br />
            <br />
            {intl.formatMessage({ id: 'footer-contact-person' })}:
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
            {intl.formatMessage({ id: 'footer-bank-no' })}: 270228304/0300
            <br />
            <br />
            <br />
            {intl.formatMessage({ id: 'footer-cooperation' })}
            <br />
            {intl.formatMessage({ id: 'footer-cooperation-rest' })}
            <br />
            <br />
            Spolek udržitelný rozvoj
            <br />
            Ostružinová 2455/11, 10600, Praha 10
            <br />
            IČ: 22880569
            <br />
            <br />
            Občanské sdružení Alternativa II, z.s.
            <br />
            Terronská 894/56, 160 00, Praha 6
            <br />
            IČ:270 26 345
            <br />
            <br />
            <br />
            {intl.formatMessage({ id: 'footer-partners' })}:
            <br />
            <br />
            <Img width="212px" alt="EU logo" src={euSrc} />
            <br />
            <br />
            <Img width="212px" alt="Blue Board Logo" src={blueboardSrc} />
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
              <Img
                alt="MetroFarm on Instagram"
                src={instagramSrc}
                width="45px"
              />
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
              <Img alt="Metrofarm on Facebook" src={facebookSrc} width="45px" />
              <Span m="20px">MetroFarm</Span>
            </Anchor>
          </CustomSpan>
          <Anchor
            id="map-wrapper"
            title="Open on Mapy.cz"
            href="https://mapy.cz/s/cazebujemo"
            target="_blank"
            rel="noreferrer noopener"
            target="_blank"
            width="55%"
          >
            <Img width="100%" alt="Metrofarm address on Mapy.cz" src={mapSrc} />
          </Anchor>
        </EnhancedFlex>
        <Flex pt="20px" justifyContent="space-between">
          <Span>&copy;MetroFarm {new Date().getFullYear()}</Span>
        </Flex>
      </Container>
    </Wrapper>
  )
}

export default Footer
