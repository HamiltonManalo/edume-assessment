"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpansionService = void 0;
const fs_1 = require("fs");
const wordMap = JSON.parse(fs_1.readFileSync('./words.json', 'utf8'));
var ExpansionService;
(function (ExpansionService) {
    ExpansionService.expand = (currentExpansions, map) => {
        const output = [];
        for (const s in currentExpansions)
            for (const c in map)
                output.push(currentExpansions[s] + map[c]);
        return output;
    };
    function filterForOnlyRealWords(word) {
        if (wordMap[word.length][word] == undefined)
            return false;
        return true;
    }
    ExpansionService.filterForOnlyRealWords = filterForOnlyRealWords;
})(ExpansionService = exports.ExpansionService || (exports.ExpansionService = {}));
//# sourceMappingURL=expansionService.js.map