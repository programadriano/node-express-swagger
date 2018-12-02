const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const router = express.Router();

//swagger
const expressSwagger = require('express-swagger-generator')(app);

let options = {
    swaggerDefinition: {
        info: {
            description: 'This is a sample server',
            title: 'Swagger',
            version: '1.0.0',
        },
        host: 'localhost:3000',
        basePath: '/v1',
        produces: [
            "application/json"
        ],
        schemes: ['http', 'https']        
    },
    basedir: __dirname, //app absolute path
    files: ['./routes/**/*.js'] //Path to the API handle folder
};
expressSwagger(options)

//end swagger


//Rotas
const index = require('./routes/index');
const personRoute = require('./routes/personRoute');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/', index);
app.use('/v1/person', personRoute);

module.exports = app;