const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  designation: String,
  image: String,
  email: String,
  contact: String,
  isStudentBody: Boolean,
});

module.exports = mongoose.model("teams", teamSchema);
