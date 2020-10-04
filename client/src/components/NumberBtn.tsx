import React from 'react'

type numpadProps = {
  digit: string
  values: string[]
  clickHandler: (digit: string) => void
}

const NumberBtn = ({ digit, values, clickHandler }: numpadProps) => {
  return (
    <button
      style={{ width: '100px', height: '45px' }}
      onClick={() => clickHandler(digit.toString())} >
      <span style={{ height: '20px' }}>{digit}</span> <br />
      <span style={{ height: '20px' }}>{values.join(' ')}</span>
    </button>
  )
}

export default NumberBtn
