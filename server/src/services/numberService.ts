
export namespace NumberService {
    export const getAlphabetValues = (value: number): string[] => {
        if(value < 2 || value > 9) return []
        const numberMap: {[name: number]: string[]} = {
            2 : ['a', 'b', 'c'],
            3 : ['d', 'e', 'f'],
            4 : ['g', 'h', 'i'],
            5 : ['j', 'k', 'l'],
            6 : ['m', 'n', 'o'],
            7 : ['p', 'q', 'r', 's'],
            8 : ['t', 'u', 'v'],
            9 : ['w', 'y', 'x', 'z']
        }
        return numberMap[value]
    }
}