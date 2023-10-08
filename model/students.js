const mongoose = require("mongoose");

const studentsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone_number: [
    {
      type: String,
    },
  ],
  edviron_id: {
    type: String,
  },
  school_generated_id: {
    type: String,
  },
  school_id: {
    type: String,
  },
  class: {
    type: String,
  },
  section: {
    type: String,
  },
  category: {
    type: String,
  },
  dob: {
    type: Date,
  },
  gender: {
    type: String,
  },
  previous_session_dues: Number,
  additional_details: {
    type: Object,
    aadhar: String,
    father: {
      type: String,
      name: String,
    },
    mother: {
      type: String,
      name: String,
    },
    address: {
      type: String,
      Street: String,
      city: String,
      state: String,
      pin: String,
    },
  },
  aadhar_number: String,
  address: {
    type: Object,
    Street: String,
    city: String,
    state: String,
    pin: String,
  },
  father_name: {
    type: String,
    name: String,
  },
  mother_name: {
    type: String,
    name: String,
  },
});

const students = mongoose.model("students", studentsSchema);
module.exports = students;
