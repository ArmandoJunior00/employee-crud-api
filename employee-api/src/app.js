/**
 * arquivo: app.js
 * descrição: arquivo resposavel por fazer a conexão com o aquivo 'server.js'
 * data: 27/10/2022
 */

const express = require('express');
const cors = require('cors');

const app = express();


// ==> Rotas da API (Employee)
const index = require('./routes/index');
//const employeeRoute = require('./routes/employee.routes');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.json({ type: 'aplication/vnd.api+json'}));
app.use(cors());

app.use(index);
//app.use('/api/', employeeRoute);

module.exports = app;

