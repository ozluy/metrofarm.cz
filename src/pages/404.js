import React from 'react'
import Container from 'components/Container'
import { H1, Pragraph, Section, Div } from 'components/Elements'
import { Link } from 'gatsby'

const NotFound = () => (
  <Section>
    <Div p="50px 16px">
      <H1>404 Page Not Found</H1>
      <Pragraph>
        Oops! The page you are looking for has been removed, relocated or never
        existed.
      </Pragraph>
      <Pragraph>
        You can go to home <Link color="green" to="/">Home Page</Link>.
      </Pragraph>
    </Div>
  </Section>
)

export default NotFound
