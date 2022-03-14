const mongoose = require("mongoose");
require("colors");

const connectDB = async () => {
  try {
    const url = process.env.MONGO_URI;
    const conn = mongoose.connect(url, {
        useUnifiedTopology: true,
        useNewUrlParser: true,

    });
    console.log(
      "database connected"
    );
  } catch (error) {
    console.log(`error: ${error.message}`.bgRed.white);
  }
};

module.exports = connectDB;