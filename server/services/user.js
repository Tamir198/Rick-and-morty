import { UserModel } from "../models/db/user.js";

export default class userService {
  static getUser = async ( username ) => await UserModel.findOne({ "Name": username });
  static createuser = ({userName, password}) => console.log('Create new user on mongo')
}