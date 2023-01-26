const jwt = require('jsonwebtoken');
const errors = require('../errors');
const config = require('./../config');

module.exports = function authenticate() {
    return async (req, res, next) => {
        if (!('authorization' in req.headers)) throw errors.AuthTokenError('Missing authorization header');
        const token = req.headers['authorization'].split(' ')[1];
        let payload;
        try {
            payload = jwt.verify(token, config.JWT_SALT || 'salt');
            req.user = payload;
            next();
        } catch (err) {
            throw errors.UnauthorizedError(err.name);
        }
    };
};
