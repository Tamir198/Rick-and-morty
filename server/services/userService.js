import userDBHelper from "./db/userDBHelper.js";
import jwt from "jsonwebtoken"


export default class userService {
  static getUser = async (username, password) => {
    return await userDBHelper.findOneUser(username, password);
  }
  static createuser = async (userName, password) => {
    return await userDBHelper.createOneUser(userName, password);
  }

  static generateUserToken = (username, password) => {
    return jwt.sign({ username, password }, process.env.TOKEN_SECRET, { expiresIn: "1h" });
  }

}