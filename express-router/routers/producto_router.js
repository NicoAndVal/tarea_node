const express = require('express');


const {
    listar,
    guardar,
    borrar,
    actualizar
} = require('../controller/productos_controller');

const router = express.Router();

router.get('/producto', listar);
router.put('/producto/:id', actualizar);
router.delete('/producto/:id', borrar);
router.post('producto', guardar);

module.exports = router;
