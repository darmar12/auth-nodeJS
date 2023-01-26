const jwt = require('jsonwebtoken');
const errors = require('../errors');
const config = require('./../config');

module.exports = function (roles) {
    return async (req, res, next) => {
        if (!('authorization' in req.headers)) throw errors.AuthTokenError('Missing authorization header');
        const token = req.headers['authorization'].split(' ')[1];
        try {
            const {roles: userRoles} = jwt.verify(token, config.JWT_SALT || 'salt');
            let hasRole = false;
            userRoles.forEach(role => {
                if(roles.inculdes(role)) hasRole = true;
            });
            if(!hasRole) {
                throw errors.AuthTokenError("You don't have access");
            }
            next();
        } catch (err) {
            throw errors.UnauthorizedError(err.name);
        }
    };
};