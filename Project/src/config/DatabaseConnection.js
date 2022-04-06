const mongoose = require("mongoose");
const keys = require("./keys");
mongoose.connect(keys.MongoURL, () => {
  console.log("Sucessfully Connected");
});
