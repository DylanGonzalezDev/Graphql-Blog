const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})?$/,
      "Invalid email address format",
    ],
  },
  displayName: {
    type: String,
    required: true,
  },
},{
    timestamps: true,
    versionKey: false,
});

module.exports = model("User", UserSchema);
