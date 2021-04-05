const express = require('express');

const app = express();

const rutas = require('./routers/index');

rutas(app);

app.listen(8080, () => {
    console.log('El servidor está listo')
})