import { UserModel } from "../models/db/user.js";

export default class userService {
  static getUser = async (username, password) => await UserModel.findOne(
    { "name": username, "password": password }
  );
  static createuser = ({ userName, password }) => console.log('Create new user on mongo')
}