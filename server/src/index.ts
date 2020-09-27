import { NumberService } from './services/numberService'
import { ExpansionService } from './services/expansionService'
import bodyParser from 'body-parser'
import express from "express"

const app = express();
const port = 8080; // default port to listen


app.use(bodyParser.json())


app.post('/api/expand', (req, res) => {
    const accept = req.headers.accept
    if(accept !== 'application/json')
        res.status(406)
           .json({message: 'endpoint only accepts "application/json"'})

    const body: {[name: string]: string} = req.body
    console.log(body)
    if(body.string.length > 4) {
        res.status(404)
           .json({Error: 'Too many values to expand'})
    }
    // assumption that this is an internal API and all values can convert to number
    const expandedValues = body.string.split('')
        .map(num => NumberService.getAlphabetValues(Number(num)))
        .reduce((n, c) => ExpansionService.Expand(n, c));

    res.status(200).json({data: expandedValues})
});

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );
