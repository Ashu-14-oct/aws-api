const serverless = require("serverless-http");
const express = require("express");
const app = express();
const mongoose = require("mongoose");

//mongodb config

const mongoDB = mongoose
  .connect(process.env.mongodb_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to mongodb successfully");
  })
  .catch((err) => {
    console.log("error in mongodb", err);
  });

const students = require("./model/students");

app.get("/", async (req, res) => {
  try {
    const student = await students.find({
      previous_session_dues: { $gt: 0 },
    });

    return res.status(200).json(student);
  } catch (err) {
    return res.status(500).json({ message: "Internal server error" });
  }
});

module.exports.handler = serverless(app);
