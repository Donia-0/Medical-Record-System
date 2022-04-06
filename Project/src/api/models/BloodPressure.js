const mongoose = require("mongoose");
const bloodPresssureSchema = new mongoose.Schema({
  systolic: {
    type: Number,
    required: true,
  },
  diastolic: {
    type: Number,
    required: true,
  },
  pulse: {
    type: Number,
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

const BloodPresssure = mongoose.model("BloodPressure", bloodPresssureSchema);

module.exports = BloodPresssure;
