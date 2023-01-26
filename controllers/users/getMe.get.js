const router = require("express").Router();
const errors = require('./../../errors');
const User = require('./../../models/User');
const authenticate = require('./../../middleware/authenticate');

router.get(
    '/getMe',
    authenticate(),
    async (req, res) => {
        try{
            const user = await User.findById({ _id: req.user.id });
            if (!user) throw errors.NotFoundError('User not found');
            res.status(201).json({user});
        } catch (e) {
            throw errors.InternalServerError(e);
        }
    }
)

module.exports = router;