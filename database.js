const config = require('./config');
const mongoose = require('mongoose');

module.exports = () =>
    mongoose
      .connect(config.MONGO_URI)
      .then(() => console.log('mongo start'))
      .catch((e) => console.log(e));
