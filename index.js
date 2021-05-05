const { info } = require('console');
const express = require('express');
const path = require('path');
require('dotenv').config();

// DB Config
const { dbConnection } = require('./database/config');
dbConnection();


const app = express();

// Leer de cuerpo
app.use(express.json());

// Node Server
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);

require('./sockets/socket');


// Carpeta pública
const publicPath = path.resolve(__dirname, 'public');

app.use(express.static(publicPath));

// Rutas
app.use('/api/login', require('./routes/auth.route'));


server.listen(process.env.PORT, (err) => {
    if (err) throw new Error(err);


    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});