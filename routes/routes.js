const express = require('express');

const mco2 = express();

mco2.get('/', (req,res)=>{
    res.render('home');
});

module.exports = mco2;