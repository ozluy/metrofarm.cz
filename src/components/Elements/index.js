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
  ${shared};
`

export const Pragraph = styled.p`
  ${({ theme }) => theme.font.medium};
  margin: 16px 0 ${shared};
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

export const ListItem = styled.li`
  line-height: 50px;
  margin-top: 20px;

  ${({ theme }) => css`
    @media screen and (max-width: ${theme.breakpoints.lg}) {
      line-height: 30px;
      margin-top: 20px;
    }
  `}
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
