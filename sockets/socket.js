const { io } = require('../index');


// Mensajes de sockets
io.on('connection', client => {
    console.log('Cliente conectado');
    io.emit('mensaje', { admin: 'Usuario nuevo' });

    client.on('disconnect', () => {
        console.log('Cliente desconectado');
    });


    client.on('mensaje', (payload) => {
        console.log(payload);

        io.emit('mensaje', { admin: 'Nuevo mensaje' });
    });

});