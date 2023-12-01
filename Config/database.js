const mongoose = require("mongoose");
require("dotenv").config();
const dbconnect = () => {
  mongoose
    .connect(process.env.DATABASE_URL)
    .then(console.log("Server connection with the database : Successful"))
    .catch((err) => {
      console.error(err.messsage);
      console.log("Server connection with the database : Failed");
      process.exit(1);
    });
};
module.exports = dbconnect;
