import styled, { css } from 'styled-components'

const Container = styled.div`
  max-width: 1980px;
  width: 100%;
  margin: 0 auto;
  padding: 0 32px;
  position: relative;

  ${({ theme }) => css`
    padding: 0 16px;
  `}
`

export default Container
