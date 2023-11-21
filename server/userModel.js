import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate: validator.isEmail,
  },
  description: {
    type: String,
    default: "This user has no description",
  },
  image: {
    type: String,
    default: "default-photo.jpg",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const User = mongoose.model("Customer", userSchema);

export default User;
