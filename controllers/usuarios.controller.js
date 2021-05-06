const { response } = require("express");
const Usuario = require('../models/usuario.model');

const getUsuarios = async(req, res = response) => {

    try {

        const desde = Number(req.query.desde) || 0;

        const usuariosDb = await Usuario.find({ _id: { $ne: req.uid } })
            .sort('-online')
            .skip(desde)
            .limit(20);

        if (!usuariosDb) {
            return res.status(404).json({
                ok: false,
                msg: '¡No hay datos!'
            });
        }


        res.json({
            ok: true,
            usuarios: usuariosDb,
            total: usuariosDb.length
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
    getUsuarios
}