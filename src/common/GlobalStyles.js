import { createGlobalStyle } from 'styled-components'
import { HelvaticaBold, HelvaticaMedium, HelvaticaLight } from './fonts'

export default createGlobalStyle`

@font-face {
    font-family: "Rufo-Black";
    font-style: normal;
    font-weight: 700;
    src: local("Helvatica Bold"), url(${HelvaticaBold}) format("truetype");
  }
  @font-face {
    font-family: "Helvatica Medium";
    font-style: normal;
    font-weight: 500;
    src: local("Helvatica Bold"), url(${HelvaticaMedium}) format("truetype");
  }
  @font-face {
    font-family: "Helvatica Light";
    font-style: normal;
    font-weight: 400;
    src: local("Helvatica Bold"), url(${HelvaticaLight}) format("truetype");
  }



html {
    height: 100%;
}

:root {
  --main-width: 100vw;
  --aspect-ratio: 315 / 560;
}

body{
    margin: 0;
    padding: 0;
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
     ${({ theme }) => theme.font.medium};
    height: 100%;
    transition: color 350ms ease 0s, background 350ms ease 0s;

}

a{
    text-decoration: none;
}

*{
    box-sizing: border-box;
}

img{
    max-width: 100%;
}

#___gatsby {
    height: 100%;
    #gatsby-focus-wrapper{
        display: flex;
        min-height: 100vh;
        flex-direction: column;
        justify-content: flex-start;
    }
}
`
