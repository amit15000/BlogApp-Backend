const express = require("express");
const dbconnect = require("./Config/database");
const blogRoutes = require("./Routes/blogRoutes");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 4000;

//connection with database
dbconnect();

//creating routes

app.use(express.json());
app.use("/api/v1", blogRoutes);

app.get("/", (req, res) => {
  res.send("<h1>This is homepage of Amit's Blog");
});

app.listen(PORT, () => {
  console.log(`Server running succesfully on ${PORT}`);
});
