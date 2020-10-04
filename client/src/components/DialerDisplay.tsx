import React from 'react'

type DialerDisplayProps = {
  value: string
}

const DialerDisplay = ({ value }: DialerDisplayProps) => {
  return <input type='text' value={value} readOnly />
}

export default DialerDisplay
