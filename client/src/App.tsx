import React, { useState, useEffect } from 'react'
import './App.css'
import DialerDisplay from './components/DialerDisplay'
import GuessSelector from './components/GuessSelector'
import MessageBox from './components/MessageBox'
import NumberBtn from './components/NumberBtn'
import expandedDigitFetcher from './services/FetchingService'

function App () {
  const [currentDigits, setDigits] = useState('')
  const [suggestedWords, setSuggestedWords] = useState<string[]>([])
  const [currentMessage, setMessage] = useState<string[]>([])

  useEffect(() => {
    const fetchResults = async (digits: string) => {
      if (digits.length > 0) {
        const result = await expandedDigitFetcher(digits)
        if (result.ok) {
          const body = (await result.json()) as fechResponse
          setSuggestedWords(body.data)
        }
      }
    }
    fetchResults(currentDigits)
  }, [currentDigits])

  const handleInput = (digit: string) => {
    if (digit === '<-') setDigits(c => c.slice(0, c.length - 1))
    else if (digit === '#' || digit === '0') return
    else if (currentDigits.length < 4) setDigits(c => c + digit)
  }

  const handleGuessSelection = (selection: string) => {
    setMessage(s => s?.concat([selection]))
    setSuggestedWords([])
    setDigits('')
  }

  return (
    <div className='App'>
      <header className='App-header' style={{ display: 'flex' }}>
        <MessageBox message={currentMessage} />
        <DialerDisplay value={currentDigits} />
        <div
          className='dialpadcontainer'
          style={{ width: '300px', height: '125px' }}
        >
          <GuessSelector
            guesses={suggestedWords}
            guessSelectionHandler={handleGuessSelection}
          />
          <div style={{ display: 'flex', flexFlow: 'wrap', justifyContent: 'center' }}>

            {numpadValues.map(x => (<NumberBtn digit={x.digit} values={x.values} clickHandler={handleInput} /> ))}
          </div>
        </div>
      </header>
    </div>
  )
}
export default App
const numpadValues = [
  { digit: '1', values: [] },
  { digit: '2', values: ['a', 'b', 'c'] },
  { digit: '3', values: ['d', 'e', 'f'] },
  { digit: '4', values: ['g', 'h', 'i'] },
  { digit: '5', values: ['j', 'k', 'l'] },
  { digit: '6', values: ['m', 'n', 'o'] },
  { digit: '7', values: ['p', 'q', 'r', 's'] },
  { digit: '8', values: ['t', 'u', 'v'] },
  { digit: '9', values: ['w', 'x', 'y', 'z'] },
  { digit: '#', values: [] },
  { digit: '0', values: [] },
  { digit: '<-', values: [] }
]
