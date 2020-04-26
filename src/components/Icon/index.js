import React from 'react'
import styled from 'styled-components'
import { space } from 'styled-system'

export const Wrapper = styled.i`
  cursor: pointer;
  font-size: 0;
  ${space};
`

const Icon = props => <Wrapper rel="icon" {...props} />

export default Icon
