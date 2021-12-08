import styled, { css } from 'styled-components'
import {
  typography,
  space,
  maxHeight,
  maxWidth,
  width,
  height,
  color,
  textAlign,
  flexbox,
  background,
  position,
  fontWeight,
} from 'styled-system'

const shared = css`
  ${typography};
  ${space};
  ${maxHeight};
  ${maxWidth};
  ${width};
  ${height};
  ${color};
  ${textAlign};
  ${background};
  ${position};

  ${({ textDecoration }) =>
    textDecoration &&
    css`
      text-decoration: ${textDecoration};
    `};

  ${({ cursor }) =>
    cursor &&
    css`
      cursor: ${cursor};
    `};

  ${({ display }) =>
    display &&
    css`
      display: ${display};
    `};

  ${({ ff, theme }) =>
    ff &&
    css`
      ${theme.fontFamily[ff]};
    `};
`

export const H1 = styled.h1`
  ${({ theme }) => theme.font.large};
  margin-top: 0;
  ${shared};
`

export const H2 = styled.h2`
  ${({ theme }) => theme.font.large};
  font-size: 60px;
  line-height: 70px;
  margin-top: 0;

  ${({ theme }) => css`
    @media screen and (max-width: ${theme.breakpoints.lg}) {
      font-size: 32px;
      line-height: 40px;
    }
  `}
  ${({ theme }) => css`
    @media screen and (max-width: ${theme.breakpoints.md}) {
      font-size: 20px;
      line-height: 30px;
    }
  `}
  ${shared};
`

export const Pragraph = styled.p`
  ${({ theme }) => theme.font.medium};
  margin: 16px 0 ${shared};
  ${fontWeight}
  a {
    color: inherit;
    font-size: inherit;
    font-family: inherit;
    font-weight: inherit;
    line-height: inherit;
    text-decoration: underline;
  }
`

export const Span = styled.span`
  ${({ theme }) => theme.font.small};
  ${shared};
  ${flexbox};
`

export const Div = styled.div`
  ${shared};
`

export const Flex = styled.div`
  ${shared};
  ${flexbox};
  display: flex;
`

export const Anchor = styled.a`
  ${shared};
  color: unset;
  outline: none;
  ${flexbox};
`

const sharedCss = css`
  line-height: 40px;
  margin-top: 20px;
  font-size: 33px;

  ${({ theme }) => css`
    @media screen and (max-width: ${theme.breakpoints.lg}) {
      line-height: 30px;
      margin-top: 20px;
    }
  `}

  ${({ theme }) => css`
    @media screen and (max-width: ${theme.breakpoints.lg}) {
      line-height: 24px;
      font-size: 18px;
    }
  `}
`

export const ListItem = styled.li`
  ${sharedCss}
`

export const EndofList = styled.div`
  a {
    color: inherit;
    ${({ theme }) => theme.fontFamily.bold};
    text-decoration: underline;
  }

  ${sharedCss}
  ${shared};
`

export const Section = styled.section`
  padding: 180px 0;

  ${({ theme }) => css`
    @media screen and (max-width: ${theme.breakpoints.lg}) {
      padding: 60px 0;
    }
  `}

  ${shared};
`

export const Img = styled.img`
  ${space};
  ${maxHeight};
  ${maxWidth};
  ${width};
  ${height};
  vertical-align: top;
`
