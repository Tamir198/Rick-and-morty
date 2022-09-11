import { mongo } from "mongoose";
import { getMongooseinstance } from "../../services/db/db.js";

const mongoose = getMongooseinstance();

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    password: { type: String, required: true }
  });


export const UserModel = mongoose.model('user', userSchema);