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

//  SQL CONNECTION -----------
const mysql = require('mysql2');
const mysqlpromise = require('mysql2/promise');
const config = require('./config/nodes'); // nodes

//const node1 = mysql.createConnection(config.db1);
const node2 = mysql.createConnection(config.db2);
//const node3 = mysql.createConnection(config.db3);

// NODE 2 CONNECTION
node2.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
  
    // NODE 2 CONNECTION
    console.log('Node2 is Active.');
  });


// Query
node2.execute("SELECT * FROM movies WHERE movie_id=?",[6],(err,result)=>{
    console.log(result);
});



