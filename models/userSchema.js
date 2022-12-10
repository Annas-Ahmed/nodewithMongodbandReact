const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: {
    type: String,
  },
  num: {
    type: Number,
  },
  isActive: {
    type: Boolean,
  },
});

const userModel = mongoose.model("user", schema);

module.exports = userModel;
