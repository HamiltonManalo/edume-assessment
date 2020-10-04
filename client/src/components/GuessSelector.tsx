import React, { MouseEvent } from 'react'
import CSS from 'csstype'

const buttonStyle: CSS.Properties = { height: '20px', display: 'inline-block' }

type GuessSelectorProps = {
  guesses: string[]
  guessSelectionHandler: (guess: string) => void
}

const GuessSelector = ({guesses, guessSelectionHandler }: GuessSelectorProps) => {
  const guessHolder = guesses

  console.log(guessHolder)
  const selectionHandler = (e: MouseEvent<HTMLElement>) =>
    guessSelectionHandler(
      guesses[parseInt(e.currentTarget.getAttribute('data-tag')!!)]
    )
  return (
    <div style={buttonStyle}>
      {guesses.map((guess, index) => (
        <button key={index} data-tag={index} style={buttonStyle} onClick={selectionHandler}>
          {guess}
        </button>
      ))}{' '}
    </div>
  )
}

export default GuessSelector
