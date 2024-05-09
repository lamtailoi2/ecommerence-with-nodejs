import { Schema, model } from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import AppError from "../services/errorService.js";
const userSchema = new Schema(
  {
    email: {
      type: String,
      require: true,
      unique: true,
      trim: true,
      validator(value) {
        if (!validator.isEmail(value)) {
          throw new AppError("Invalid Email");
        }
      },
    },
    username: {
      type: String,
      require: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      require: true,
      trim: true,
    },
    confirmPassword: {
      type: String,
      require: true,
      trim: true,
      validator: function (value) {
        return value === this.password;
      },
    },
    role: {
      type: String,
      enum: ["user", "admin", "seller"],
      default: "user",
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    collection: "users",
  }
);

userSchema.pre("save", async function () {
  //Just run this function when the password is modified
  if (!this.isModified("password")) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 12);
  this.confirmPassword = undefined;
});

userSchema.methods.comparePassword = async function (candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password); //return true or false
}
// userSchema.method("comparePassword", async function (candidatePassword) {
//   return await bcrypt.compare(candidatePassword, this.password); //return true or false
// });

const userModel = model("users", userSchema);
export default userModel;
