const { response } = require("express");
const Mensaje = require('../models/mensaje.model');

const getChats = async(req, res = response) => {

    try {

        const miId = req.uid;
        const mensajeDe = req.params.de;

        const last30 = await Mensaje.find({
                $or: [{ de: miId, para: mensajeDe }, { de: mensajeDe, para: miId }]
            })
            .sort({ createdAt: 'desc' })
            .limit(30);

        res.json({
            ok: true,
            mensajes: last30

        });

    } catch (error) {
        console.warn(error);
        res.status(500).json({
            ok: false,
            msg: 'Comuníquese con el administrador',
        });
    }
};


module.exports = {
    getChats
}