const mongoose = require("mongoose");
const glucoseSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  result: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
  },
  note: {
    type: String,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
});

const Glucose = mongoose.model("Glucose", glucoseSchema);

module.exports = Glucose;
