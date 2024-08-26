const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();
app.use(bodyParser.json());

app.use('/api',routes);

const Port = process.env.Port || 3000;
app.listen(Port,() => {
    console.log(`Server running on port ${Port}`)
})