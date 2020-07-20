const express = require('express');
const app = express();

app.use('/', require('./seos'));

module.exports = app;