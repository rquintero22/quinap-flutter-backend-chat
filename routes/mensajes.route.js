/**
 * Path api/mensajes
 */

const { Router } = require('express');
const { getChats } = require('../controllers/mensajes.controller');
const { validarJWT } = require('../middlewares/validar-jwt.middleware');

const router = Router();

router.get('/:de', validarJWT, getChats);


module.exports = router;