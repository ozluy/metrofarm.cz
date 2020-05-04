import React from 'react'
import styled, { css } from 'styled-components'
import { Flex, Section } from 'components/Elements'
import Seo from 'components/Seo'

const Wrapper = styled(Flex)`
  justify-content: center;
`
const Iframe = styled.iframe`
  width: 640px;
  height: 1210px;
  margin-top: 20px;

  ${({ theme }) => css`
    @media screen and (max-width: ${theme.breakpoints.md}) {
      width: 95%;
    }
  `}
`

const ContactForm = () => (
  <Section>
    <Seo />
    <Wrapper>
      <Iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSfx6MsGDo9iY4sv0s21ZzDU8GaOs90OnWNw_dVd_wHjoWSc9A/viewform?embedded=true"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
      >
        Loading…
      </Iframe>
    </Wrapper>
  </Section>
)

export default ContactForm
