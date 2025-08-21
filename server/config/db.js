const mongoose = require("mongoose");

const dbPathway = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(dbPathway);
    console.log("MongoDB Connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
