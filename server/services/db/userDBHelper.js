import { UserModel } from "../../models/db/user.js";

export default class userDBHelper {
  static findOneUser = async (username, password) => await UserModel.findOne(
    { "name": username, "password": password }
  );

  static createOneUser = async (username, password) => {
    const doesExist = await userDBHelper.findOneUser(username, password);
    if (doesExist !== null) return {};

    const newUser = new UserModel({ "name": username, "password": password });
    newUser.save();

    return newUser;
  }
}