const router = require("express").Router();
const { body, validationResult } = require("express-validator");
const User = require('./../../models/User');
const serverErrors = require('./../../errors');

router.post(
    '/register',
    [
        body("username").notEmpty(),
        body("email").isEmail(),
        body("password").isLength({min: 4, max: 10})
    ],
    async (req, res) => {
        const errors = validationResult(req);
        try {
            if (!errors.isEmpty() && errors.errors[0].param === 'username') throw serverErrors.InvalidInputError("Invalid username. Please try again");
            if (!errors.isEmpty() && errors.errors[0].param === 'email') throw serverErrors.InvalidInputError("Invalid email. Please try again");
            if (!errors.isEmpty() && errors.errors[0].param === 'password') throw serverErrors.InvalidInputError("Invalid password. Please try again");
            if (await User.findOne({ email: req.body.email })) throw errors.AlreadyExist('User already exist!');
            await User.create({ ...req.body });
            res.status(200).json({ message: 'Account create' });
        } catch (error) {
            throw serverErrors.InternalServerError(error);
        }
    }
);

module.exports = router;