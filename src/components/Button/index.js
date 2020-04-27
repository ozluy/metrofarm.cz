import styled, { css } from 'styled-components'
import { space, maxWidth, maxHeight, width, height } from 'styled-system'

const Button = styled.button`
  ${({ theme }) => theme.font.medium};
  letter-spacing: 0px;
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.white};
  min-width: 350px;
  padding: 0 20px;
  font-size: 30px;
  border: none;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.07);
  border-radius: 70px;
  overflow: hidden;
  height: 70px;
  outline: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${({ theme }) => css`
    @media screen and (max-width: ${theme.breakpoints.lg}) {
      font-size: 24px;
      height: 50px;
      padding: 0 15px;
      min-width: 250px;
    }
  `}

  ${({ theme }) => css`
    @media screen and (max-width: ${theme.breakpoints.md}) {
      font-size: 18px;
      height: 40px;
      padding: 0 10px;
      min-width: 150px;
    }
  `}
  

  ${space};
  ${maxHeight};
  ${maxWidth};
  ${width};
  ${height};
`

export default Button
