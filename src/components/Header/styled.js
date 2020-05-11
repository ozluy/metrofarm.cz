import styled, { css } from 'styled-components'

export const Wrapper = styled.header`
  height: 152px;
  z-index: 10;
`

export const LangSelection = styled.div`
  position: absolute;
  right: calc(100% + 16px);
  top: 0;
  color: ${({ theme }) => theme.colors.black};
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  line-height: 20px;
`

export const LangOption = styled.button`
  background: transparent;
  padding: 0 2px;
  border: none;
  color: inherit;

  ${({ theme }) => theme.fontFamily.regular};
  opacity: 0.5;
  outline: none;
  width: auto;
  font-size: 14px;
  line-height: 20px;
  width: 70px;
  cursor: pointer;

  ${({ active }) =>
    active &&
    css`
      ${({ theme }) => theme.fontFamily.bold};
      opacity: 1;
    `}
`

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: row;
  position: fixed;
  right: 0;
  left: 0;
  margin: 0 auto;
  top: 0;
  padding-top: 43px;
  max-width: 1980px;
  width: 100%;
  z-index: 10;
`

export const Piece = styled.span`
  width: 43px;
  height: 5px;
  background-color: ${({ theme }) => theme.colors.black};
  transition: all 0.4s ease;
  position: absolute;

  ${({ theme }) => css`
    @media screen and (max-width: ${theme.breakpoints.md}) {
      width: 30px;
    }
  `}

  &:nth-child(1) {
    top: 0px;
  }
  &:nth-child(2) {
    top: 10px;
  }
  &:nth-child(3) {
    top: 20px;
  }
`

export const Burger = styled.button`
  align-items: center;
  display: inline-flex;
  flex-direction: column;
  height: 25px;
  width: 43px;
  z-index: 11;
  position: absolute;
  top: 43px;
  right: 43px;
  background: transparent !important;
  outline: none !important;
  color: transparent;
  border: none !important;
  cursor: pointer;

  ${({ theme }) => css`
    @media screen and (max-width: ${theme.breakpoints.md}) {
      right: 16px;
      top: 20px;
      width: 30px;
    }
  `}

  ${({ open }) =>
    open &&
    css`
      ${Piece} {
        &:nth-child(1) {
          transform: rotateZ(-45deg);
          top: 12px;
        }
        &:nth-child(3) {
          top: 13px;
          transform: rotateZ(45deg);
        }
        &:nth-child(2) {
          transform: translate(43px);
          opacity: 0;
        }
      }

      ${LangSelection} {
        color: ${({ theme }) => theme.colors.white};
      }
    `}
`

export const Nav = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  flex-direction: column;
  position: absolute;
  background-color: ${({ theme }) => theme.colors.brown};
  top: 0;
  right: 0;
  padding: 0 140px 0 0;
  height: 0;
  overflow: hidden;
  visibility: hidden;
  opacity: 0;

  ${({ theme }) => css`
    @media screen and (max-width: ${theme.breakpoints.md}) {
      width: 100%;
    }
  `}

  a {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.font.bold};
    font-size: 40px;
    line-height: 85px;
    text-align: right;
    transform: translateX(200px);
    opacity: 0;
    visibility: visible;

    ${({ theme }) => css`
      @media screen and (max-width: ${theme.breakpoints.lg}) {
        font-size: 32px;
        line-height: 80px;
      }
    `}

    ${({ theme }) => css`
      @media screen and (max-width: ${theme.breakpoints.md}) {
        font-size: 20px;
        line-height: 60px;
      }
    `}
  }

  ${({ open }) =>
    open &&
    css`
      padding: 120px 140px 0 60px;
      visibility: visible;
      opacity: 1;
      height: 100vh;
      bottom: 0;

      a {
        transform: translateX(0);
        opacity: 1;
        transition: all 0.7s ease;
        visibility: visible;

        &:nth-child(2) {
          transition-delay: 0.075s;
        }
        &:nth-child(3) {
          transition-delay: 0.15s;
        }
        &:nth-child(4) {
          transition-delay: 0.225s;
        }
        &:nth-child(5) {
          transition-delay: 0.3s;
        }
        &:nth-child(6) {
          transition-delay: 0.375s;
        }
      }

      ${({ theme }) => css`
        @media screen and (max-width: ${theme.breakpoints.lg}) {
          padding: 140px 100px 0 50px;
        }

        @media screen and (max-width: ${theme.breakpoints.md}) {
          padding: 70px 40px 0 20px;
        }
      `}
    `}
`

export const Logo = styled.div`
position: relative;
  a {
    color: ${({ theme }) => theme.colors.black};
    z-index: 11;
    display: inline-block;
    position: absolute;
  }

  ${({ theme }) => css`
    @media screen and (max-width: ${theme.breakpoints.md}) {
      svg {
        width: 90px;
        height: 90px;
        margin-left: -4px;
      }
    }
  `}
`
