const mongoose = require("mongoose");
const examinationSchema = new mongoose.Schema({
  symptomps: {
    type: String,
    required: true,
  },
  diagnosis: {
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

const Examination = mongoose.model("Examination", examinationSchema);

module.exports = Examination;
