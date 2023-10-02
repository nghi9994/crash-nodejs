const mongoose = require("mongoose");

const connectDB = (url) => {
  return mongoose.connect(url, {
    // if using V6, don't need to do this
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
