const express = require('express');


const {
    listar,
    guardar,
    borrar,
    actualizar
} = require('../controller/categoria_controller');

const router = express.Router();

router.get('/categoria', listar);
router.put('/categoria/:id', actualizar);
router.delete('/categoria/:id', borrar);
router.post('categoria', guardar);

module.exports = router;
