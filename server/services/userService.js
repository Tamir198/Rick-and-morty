import userDBHelper from "./db/userDBHelper.js";

export default class userService {
  static getUser = async (username, password) => await userDBHelper.findOneUser(username,password);
  static createuser = ({ userName, password }) => console.log('Create new user on mongo');
}