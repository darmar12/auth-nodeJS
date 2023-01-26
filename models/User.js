const {Schema, model} = require("mongoose");
const bcrypt = require("bcryptjs");
const Role = require("./Role");

const userSchema = new Schema({
  username: {
      type: String,
      require: true
  },
  email: {
    type: String,
    unique: true,
    require: true
  },
  password: {
    type: String,
    require: true
  },
  roles: [{
    type: String,
    ref: "Role"
  }],
});

userSchema.pre('save', async function(next) {
  let user = this;
  const userRole = await Role.findOne({value: "USER"});
  user.roles = userRole;
  if (!user.isModified('password')) next();

  bcrypt.genSalt(10, function(err, salt) {
    if (err) next(err);
    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) next(err);
      user.password = hash;
      next();
    });
  });
});

module.exports = model('User', userSchema);
