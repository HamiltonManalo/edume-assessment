import bodyParser from 'body-parser'
import express from "express"
import configureExpansionController from './controllers/expansionController';

const app = express();
const port = 8080; // default port to listen

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use('/', express.static('dist'))

configureExpansionController(app)


app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
