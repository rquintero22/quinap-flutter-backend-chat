const jwt = require('jsonwebtoken');

const generarJWT = (uid) => {

    return new Promise((resolve, reject) => {
        const payload = {
            uid
        };

        jwt.sign(payload, process.env.JWT_KEY, {
            expiresIn: '8h'
        }, (err, token) => {
            if (err) {
                // No se creó el token
                reject('No se generó el JWT');
            } else {
                resolve(token);
            }
        });
    });

};

module.exports = {
    generarJWT
};