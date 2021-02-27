const express = require('express');

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();

app.get('/',(req, res, next) => {
    res.send('Hello Wolrd teste');
});

app.listen(PORT, HOST);