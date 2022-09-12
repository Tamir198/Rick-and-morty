import { UserModel } from "../../models/db/user.js";

export default class userDBHelper{
  static findOneUser = async (username, password) => await UserModel.findOne(
    { "name": username, "password": password }
  );
}