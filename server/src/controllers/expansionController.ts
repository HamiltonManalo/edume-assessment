import express from "express"
import { NumberService } from '../services/numberService'
import { ExpansionService } from '../services/expansionService'
const ConfigureExpansionController = (app: express.Application) => app.post('/api/expand', (req, res) => {
    const accept = req.headers.accept
    if(accept !== 'application/json')
        res.status(406)
           .json({message: 'endpoint only accepts "application/json"'})

    const body: {[name: string]: string} = req.body
    if(body && body.string.length > 4) {
        res.status(404)
           .json({Error: 'Too many values to expand'})
    }
    // assumption that this is an internal API and all values can convert to number
    const expandedValues = (body.string as string).split('')
        .map(num => NumberService.getAlphabetValues(Number(num)))
        .reduce((n, c) => ExpansionService.Expand(n, c)).filter(ExpansionService.filter);

    res.status(200).json({data: expandedValues})
});

export default ConfigureExpansionController