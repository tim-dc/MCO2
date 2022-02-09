const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./routes/routes.js');
const {engine} = require('express-handlebars');


const mco2 = express();

mco2.engine('handlebars', engine());
mco2.set('view engine', 'handlebars');
mco2.set('views', './views');
mco2.use(express.static(path.join(__dirname, `/public`)));

mco2.listen(8080, 'localhost', ()=>{
    console.log('Server running at: http://localhost:8080');
});

mco2.use('/',routes);
