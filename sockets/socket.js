const { io } = require('../index');
const { comprobarJWT } = require('../helpers/jwt');
const { usuarioConectado, usuarioDesconectado, grabarMensaje, guardarMensaje } = require('../controllers/socket.controller');

// Mensajes de sockets
io.on('connection', client => {
    console.log('Cliente conectado');

    const [valido, uid] = comprobarJWT(client.handshake.headers['x-token']);

    // Evalua la autenticación
    if (!valido) { return client.disconnect(); }

    // Cliente válido
    usuarioConectado(uid);

    // Ingresar al usuario a una sala
    client.join(uid);

    client.on('mensaje-personal', async(payload) => {
        // TODO: Guardar mensaje
        await guardarMensaje(payload);

        io.to(payload.para).emit('mensaje-personal', payload);
    });

    client.on('disconnect', () => {
        usuarioDesconectado(uid);
    });





});