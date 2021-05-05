const mongoose = require('mongoose');

const dbConnection = async() => {
    try {
        await mongoose.connect(process.env.DB_CNN, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Base de datos en línea');
    } catch (error) {
        console.warn(error);
        throw new Error('Error en la base de datos, Comuniquese con el administrador');
    }
};

module.exports = {
    dbConnection
};