const endpoint = '/api/expand'

const fetchGuesses = (digits: string) => fetch(endpoint, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify({ string: digits }),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })

export default fetchGuesses 