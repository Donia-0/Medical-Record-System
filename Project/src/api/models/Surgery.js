const mongoose = require("mongoose");
const surgerySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  doctorName: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
  },
  location: {
    type: String,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
});

const Surgery = mongoose.model("Surgery", surgerySchema);

module.exports = Surgery;
