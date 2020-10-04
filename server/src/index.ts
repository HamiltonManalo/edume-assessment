import bodyParser from 'body-parser'
import express from "express"
import ConfigureExpansionController from './controllers/expansionController';

const app = express();
const port = 8080; // default port to listen



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use('/',express.static('dist'))

ConfigureExpansionController(app)

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );
