import { css } from 'styled-components'
const breakpoints = {
  md: '991px',
  lg: '1400px',
}
const theme = {
  breakpoints,
  font: {
    small: css`
      font-size: 25px;
      font-family: 'Helvatica Regular', Arial, Sans-serif;
      line-height: 30px;
      font-weight: 400;
      letter-spacing: 0;

      @media screen and (max-width: ${breakpoints.lg}) {
        font-size: 16px;
        line-height: 24px;
      }
      @media screen and (max-width: ${breakpoints.md}) {
        font-size: 12px;
        line-height: 20px;
      }
    `,
    medium: css`
      font-size: 40px;
      line-height: 50px;
      font-weight: 500;
      font-family: 'Helvatica Medium', Arial, Sans-serif;
      letter-spacing: 0;

      @media screen and (max-width: ${breakpoints.lg}) {
        font-size: 24px;
        line-height: 30px;
      }

      @media screen and (max-width: ${breakpoints.md}) {
        font-size: 16px;
        line-height: 24px;
      }
    `,
    large: css`
      font-size: 80px;
      line-height: 90px;
      font-weight: 700;
      font-family: 'Helvatica Bold', Arial, Sans-serif;
      letter-spacing: 0;

      @media screen and (max-width: ${breakpoints.lg}) {
        font-size: 36px;
        line-height: 40px;
      }

      @media screen and (max-width: ${breakpoints.md}) {
        font-size: 24px;
        line-height: 30px;
      }
    `,
  },
  fontFamily: {
    regular: css`
      font-family: 'Helvatica Regular', Arial, Sans-serif;
      font-weight: 400;
    `,
    medium: css`
      font-weight: 500;
      font-family: 'Helvatica Medium', Arial, Sans-serif;
    `,
    bold: css`
      font-weight: 700;
      font-family: 'Helvatica Bold', Arial, Sans-serif;
    `,
  },
  colors: {
    white: '#ffffff',
    black: '#000000',
    brown: '#6A4B37',
    green: '#009064',
    yellow: '#FFE200',
  },
}

export default theme
