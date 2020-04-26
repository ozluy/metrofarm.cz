import styled, { css } from 'styled-components'

export const Wrapper = styled.header`
  height: 152px;
  z-index: 10;
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
  /* transition: all 0.4s ease, visibility 0s ease; */
  visibility: hidden;
  opacity: 0;
  width: 680px;

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
        line-height: 60px;
      }
    `}
  }

  ${({ open }) =>
    open &&
    css`
      padding: 120px 140px 0 0;
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
          transition-delay: 0.1s;
        }
        &:nth-child(3) {
          transition-delay: 0.2s;
        }
        &:nth-child(4) {
          transition-delay: 0.3s;
        }
        &:nth-child(5) {
          transition-delay: 0.4s;
        }
        &:nth-child(6) {
          transition-delay: 0.5s;
        }
      }
    `}
`

export const Logo = styled.div`
  a {
    color: ${({ theme }) => theme.colors.black};
  }
`
