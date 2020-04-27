import React from 'react'
import styled from 'styled-components'

const Path = styled.path`
  fill: ${({ theme, active }) =>
    theme.colors[active ? 'primary' : 'secondary']};
`
const Path2 = styled.path`
  fill: ${({ theme, active }) =>
    theme.colors[active ? 'primary' : 'secondary']};
`

function TextSize({ size = 24, large }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 -45 517.333 517"
    >
      <g>
        <Path
          active={large}
          d="M197.332 426.832c-11.797 0-21.332-9.555-21.332-21.332v-384C176 9.723 185.535.168 197.332.168s21.336 9.555 21.336 21.332v384c0 11.777-9.54 21.332-21.336 21.332zm0 0"
        ></Path>
        <Path
          active={large}
          d="M368 85.5c-11.797 0-21.332-9.559-21.332-21.332V42.832h-304v21.336c0 11.773-9.54 21.332-21.336 21.332S0 75.941 0 64.168V21.5C0 9.723 9.535.168 21.332.168H368c11.797 0 21.332 9.555 21.332 21.332v42.668c0 11.773-9.535 21.332-21.332 21.332zM240 426.832h-85.332c-11.797 0-21.336-9.555-21.336-21.332s9.54-21.332 21.336-21.332H240c11.797 0 21.332 9.555 21.332 21.332s-9.535 21.332-21.332 21.332zm0 0"
        ></Path>
      </g>
      <Path2
        active={!large}
        d="M325.332 272.168c-11.797 0-21.332-9.559-21.332-21.336V213.5c0-11.777 9.535-21.332 21.332-21.332H496c11.797 0 21.332 9.555 21.332 21.332v32c0 11.777-9.535 21.332-21.332 21.332s-21.332-9.555-21.332-21.332v-10.668h-128v16c0 11.777-9.54 21.336-21.336 21.336zm0 0"
      ></Path2>
      <Path2
        active={!large}
        d="M410.668 426.832c-11.797 0-21.336-9.555-21.336-21.332v-192c0-11.777 9.54-21.332 21.336-21.332S432 201.723 432 213.5v192c0 11.777-9.535 21.332-21.332 21.332zm0 0"
      ></Path2>
      <Path2
        active={!large}
        d="M442.668 426.832h-64c-11.797 0-21.336-9.555-21.336-21.332s9.54-21.332 21.336-21.332h64c11.797 0 21.332 9.555 21.332 21.332s-9.535 21.332-21.332 21.332zm0 0"
      ></Path2>
    </svg>
  )
}

export default TextSize