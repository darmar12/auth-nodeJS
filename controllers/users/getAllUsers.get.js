const router = require("express").Router();
const errors = require('./../../errors');
const User = require('./../../models/User');
const checkRole = require('./../../middleware/checkRole');

router.get(
    '/getAllUsers',
    checkRole("ADMIN"),
    async (req, res) => {
        try{
            const users = await User.find();
            if (!users) throw errors.NotFoundError('Users not found!');
            res.status(201).json({users});
        } catch (e) {
            throw errors.InternalServerError(e);
        }
    }
);

module.exports = router;