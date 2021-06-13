const express = require('express');
const path = require('path');
const nfe = require('./notafiscaleletronica.js');
const routes = express.Router();

routes.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});
routes.get('/Api/NFe/GeraDanfe', nfe.GeraDanfe); 

module.exports = routes;