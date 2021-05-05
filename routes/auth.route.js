/**
 * Path api/login
 */

const { Router } = require('express');
const { check } = require('express-validator');


const { crearUsuario, login, renewToken } = require('../controllers/auth.controller');
const { validaCampos } = require('../middlewares/validar-campos.middleware');
const { validarJWT } = require('../middlewares/validar-jwt.middleware');

const router = Router();

router.post('/new', [
    check('nombre', 'El nombre es requerido').not().isEmpty(),
    check('email', 'El correo electrónico es requerido').isEmail(),
    check('password', 'La contraseña es requerida').not().isEmpty(),
    validaCampos
], crearUsuario);


router.post('/', [
    check('email', 'El correo electrónico es requerido').isEmail(),
    check('password', 'La contraseña es requerida').not().isEmpty(),
    validaCampos
], login);

router.get('/renew', validarJWT, renewToken);


module.exports = router;