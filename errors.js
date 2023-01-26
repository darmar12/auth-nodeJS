/**
   * custom error for invalid input
   * @author: darmar12
   * @param {string} message - error message.
   * @return {object} - custom error
   */
function InvalidInputError(message) {
    if (!(this instanceof InvalidInputError)) {
        return new InvalidInputError(message);
    }

    this.name = 'InvalidInputError';
    this.message = message;
    this.status = 400;
}
InvalidInputError.prototype = Object.create(Error.prototype);
InvalidInputError.prototype.constructor = InvalidInputError;
/**
   * custom error for invalid input
   * @author: darmar12
   * @param {string} message - error message.
   * @return {object} - custom error
   */
function UnauthorizedError(message) {
    if (!(this instanceof UnauthorizedError)) {
        return new UnauthorizedError(message);
    }

    this.name = 'UnauthorizedError';
    this.message = message;
    this.status = 401;
}
UnauthorizedError.prototype = Object.create(Error.prototype);
UnauthorizedError.prototype.constructor = UnauthorizedError;
/**
   * custom error for invalid input
   * @author: darmar12
   * @param {string} message - error message.
   * @return {object} - custom error
   */
function Forbidden(message) {
    if (!(this instanceof Forbidden)) {
        return new Forbidden(message);
    }

    this.name = 'Forbidden';
    this.message = message;
    this.status = 403;
}
Forbidden.prototype = Object.create(Error.prototype);
Forbidden.prototype.constructor = Forbidden;
/**
   * custom error for invalid input
   * @author: darmar12
   * @param {string} message - error message.
   * @return {object} - custom error
   */
function InvalidToken(message) {
    if (!(this instanceof InvalidToken)) {
        return new InvalidToken(message);
    }

    this.name = 'InvalidToken';
    this.message = message;
    this.status = 403;
}
InvalidToken.prototype = Object.create(Error.prototype);
InvalidToken.prototype.constructor = InvalidToken;
/**
   * custom error for invalid input
   * @author: darmar12
   * @param {string} message - error message.
   * @return {object} - custom error
   */
function NotFoundError(message) {
    if (!(this instanceof NotFoundError)) {
        return new NotFoundError(message);
    }

    this.name = 'NotFoundError';
    this.message = message;
    this.status = 404;
}
NotFoundError.prototype = Object.create(Error.prototype);
NotFoundError.prototype.constructor = NotFoundError;
/**
   * custom error for invalid input
   * @author: darmar12
   * @param {string} message - error message.
   * @return {object} - custom error
   */
function NotAllowedError(message) {
    if (!(this instanceof NotAllowedError)) {
        return new NotAllowedError(message);
    }

    this.name = 'NotAllowedError';
    this.message = message;
    this.status = 405;
}
NotAllowedError.prototype = Object.create(Error.prototype);
NotAllowedError.prototype.constructor = NotAllowedError;
/**
   * custom error for exist already
   * @author: darmar12
   * @param {string} message - error message.
   * @return {object} - custom error
   */
function AlreadyExist(message) {
    if (!(this instanceof AlreadyExist)) {
        return new AlreadyExist(message);
    }

    this.name = 'AlreadyExist';
    this.message = message;
    this.status = 406;
}
AlreadyExist.prototype = Object.create(Error.prototype);
AlreadyExist.prototype.constructor = AlreadyExist;
/**
   * custom error for server
   * @author: darmar12
   * @param {string} message - error message.
   * @return {object} - custom error
   */
function InternalServerError(message) {
    if (!(this instanceof InternalServerError)) {
        return new InternalServerError(message);
    }

    this.name = 'InternalServerError';
    this.message = message;
    this.status = 500;
}
InternalServerError.prototype = Object.create(Error.prototype);
InternalServerError.prototype.constructor = InternalServerError;
/**
   * custom error for auth token
   * @author: darmar12
   * @param {string} message - error message.
   * @return {object} - custom error
   */
function AuthTokenError(message) {
    if (!(this instanceof AuthTokenError)) {
        return new AuthTokenError(message);
    }

    this.name = 'AuthTokenError';
    this.message = message;
    this.status = 403;
}
AuthTokenError.prototype = Object.create(Error.prototype);
AuthTokenError.prototype.constructor = AuthTokenError;

module.exports.InvalidInputError = InvalidInputError;
module.exports.UnauthorizedError = UnauthorizedError;
module.exports.InvalidToken = InvalidToken;
module.exports.NotFoundError = NotFoundError;
module.exports.NotAllowedError = NotAllowedError;
module.exports.InternalServerError = InternalServerError;
module.exports.Forbidden = Forbidden;
module.exports.AlreadyExist = AlreadyExist;
module.exports.AuthTokenError = AuthTokenError;
