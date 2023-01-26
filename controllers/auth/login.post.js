const router = require("express").Router();
const jwt = require('jsonwebtoken');
const User = require('./../../models/User');
const errors = require('./../../errors');
const config = require('./../../config');

router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) throw errors.NotFoundError('User with this email not found.');
        const isMatch = bcrypt.compare(req.body.password, user.password);
        if (!isMatch) throw errors.UnauthorizedError('Wrong password.');
        const token = jwt.sign(
            { id: user._id, roles: user.roles},
            config.JWT_SALT,
            { expiresIn: "7d" }
        );
        res.status(200).json({data: {token, id: user._id}});
    } catch (e) {
        throw errors.InternalServerError(e);
    }
});

module.exports = router;