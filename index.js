
const express = require('express');
const app = express();
const{readFile} = require('fs').promises;

app.get('/', async (request, response) => {

    response.send( await readFile('./home.html', 'utf8') );

});

app.listen(process.env.PORT || 5500, () => console.log (`App is available on http://localhost:5500`))