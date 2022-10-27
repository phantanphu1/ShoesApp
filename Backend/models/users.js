const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema(
  {
    userName: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    firsName: {
      type: String,
      require: true,
    },
    lastName: {
      type: String,
      require: true,
    },
    phone: {
      type: Number,
      require: true,
    },
    email: {
      type: String,
      require: false,
    },
    addRess: {
      type: String,
      require: false,
    },
    avatar: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);
const Users = mongoose.model("Users", usersSchema);
module.exports = Users;
