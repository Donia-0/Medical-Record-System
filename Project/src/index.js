const express = require("express");
require("./config/DatabaseConnection");
const app = express();
const bodyParser = require("body-parser");

//Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//Import Example exampleRoute
const exampleRoute = require("./api/routes/example");
const authRoute = require("./api/routes/authRoute");

// Example use route
app.use("/example", exampleRoute);
app.use("/user", authRoute);

// Running Server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Server is running on port :", port);
});
