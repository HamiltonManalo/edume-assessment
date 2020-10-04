import { readFileSync } from 'fs'
const wordMap = JSON.parse(readFileSync('./words.json', 'utf8'))
export namespace ExpansionService {
  export const expand = (currentExpansions: string[], map: string[]) => {
    const output = [];
    for (const s in currentExpansions)
      for (const c in map)
        output.push(currentExpansions[s] + map[c])
    return output;
  }
  export function filterForOnlyRealWords(word: string): boolean {
    if (wordMap[word.length][word] == undefined)
      return false
    return true
  }
}