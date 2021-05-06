/**
 * Path api/usuarios
 */

const { Router } = require('express');
const { getUsuarios } = require('../controllers/usuarios.controller');
const { validarJWT } = require('../middlewares/validar-jwt.middleware');

const router = Router();

router.get('/', validarJWT, getUsuarios);


module.exports = router;