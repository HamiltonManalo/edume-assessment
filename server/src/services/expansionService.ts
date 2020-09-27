import { readFileSync } from 'fs'
const wordMap = JSON.parse(readFileSync('./words.json', 'utf8'))
export namespace ExpansionService {
    export const Expand = (currentExpansions: string[], map: string[]) => {
        const output = [];
        for(const s in currentExpansions)
          for(const c in map)
            output.push(currentExpansions[s] + map[c])
          return filter(output);
      }
      function filter(arr: string[]): string[] {
        const realWords: string[] = []
        arr.forEach(x => {

          console.log(`currentWord: ${x}, currentMap ${wordMap[x.length][x]}`)
          if(wordMap[x.length][x] == undefined)
            return

          realWords.push(x);
        })
        return realWords
      }
}