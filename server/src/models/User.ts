import { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    name: String,
    lastName: String,
    email: String,
  },
  {
    timestamps: true,
  }
);

export default model("User", UserSchema);