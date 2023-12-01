const mongoose = require("mongoose");
require("dotenv").config();
const dbconnect = () => {
  mongoose
    .connect(process.env.DATABASE_URL)
    .then(console.log("Server connection with the database : Sucessful"))
    .catch((err) => {
      console.error(err.messsage);
      console.log("Server connection with the database : Failed");
      process.exit(0);
    });
};
module.exports = dbconnect;
