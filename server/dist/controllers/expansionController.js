"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const numberService_1 = require("../services/numberService");
const expansionService_1 = require("../services/expansionService");
const ConfigureExpansionController = (app) => app.post('/api/expand', (req, res) => {
    const accept = req.headers.accept;
    if (accept !== 'application/json')
        res.status(406)
            .json({ message: 'endpoint only accepts "application/json"' });
    const body = req.body;
    if (body && body.string.length > 4) {
        res.status(404)
            .json({ Error: 'Too many values to expand' });
    }
    // assumption that this is an internal API and all values can convert to number
    const expandedValues = body.string.split('')
        .map(num => numberService_1.NumberService.getAlphabetValues(Number(num)))
        .reduce((n, c) => expansionService_1.ExpansionService.Expand(n, c)).filter(expansionService_1.ExpansionService.filter);
    res.status(200).json({ data: expandedValues });
});
exports.default = ConfigureExpansionController;
//# sourceMappingURL=expansionController.js.map