import React from 'react'

const Rehydration = ({ children }) =>
  typeof window === 'undefined' ? null : children

export default Rehydration
