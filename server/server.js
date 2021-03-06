require('./config/config');

const mongoose = require('mongoose');

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.json('REST API Online')
});

// Configuración global de rutas
app.use(require('./routes/routes'));

mongoose.connect(process.env.URLDB, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
    (err, res) => {
        if (err) {
            console.log(process.env.URLDB);
            throw err;
        }
        console.log('Base de datos online')
    });

app.listen(process.env.PORT, () => {
    console.log('Escuchando el puerto:', process.env.PORT)
})