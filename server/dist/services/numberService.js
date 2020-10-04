"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberService = void 0;
var NumberService;
(function (NumberService) {
    NumberService.getAlphabetValues = (value) => {
        if (value < 2 || value > 9)
            return [];
        const numberMap = {
            2: ['a', 'b', 'c'],
            3: ['d', 'e', 'f'],
            4: ['g', 'h', 'i'],
            5: ['j', 'k', 'l'],
            6: ['m', 'n', 'o'],
            7: ['p', 'q', 'r', 's'],
            8: ['t', 'u', 'v'],
            9: ['w', 'y', 'x', 'z']
        };
        return numberMap[value];
    };
})(NumberService = exports.NumberService || (exports.NumberService = {}));
//# sourceMappingURL=numberService.js.map