/**
 * arquivo: routes/index.js
 * descrição: arquivo resposavel pela chamada da API na aplicação no lado do B ack-End
 * data: 27/10/2022
 */

const express = require('express');

const router = express.Router();

router.get('/api', (req, res) => {
    res.status(200).send({
        success: 'true',
        message: 'Seja bem vindo(a) a API Node.js + PostgreSQL + Angular',
        versio: '1.0.0'
    });
});

module.exports = router;
