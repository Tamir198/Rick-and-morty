import { StatusCodes } from "../utils/statusCodeHelper.js"
import userService from "../services/userService.js";

export async function signUpUser(req, res) {
  const { username, password } = req.body;
  const doesExist = await userService.getUser(username, password);
  if(doesExist) return res.send("User taken"); 

  const newUser = await userService.createuser(username, password);
  const token = userService.generateUserToken(username,password);
  res.cookie("token", token);
  res.send(newUser);  
}

export async function loginUser(req, res) {
  const { username, password } = req.body;
  const user = await userService.getUser(username, password);

  if (!user || user.name !== username || user.password !== password) {
    return res.status(StatusCodes.FORBIDDEN).json({
      error: "invalid login",
    });
  }

  const token = userService.generateUserToken(username,password);
  res.cookie("token", token);
  res.send({ username, isLoggedIn: true })
}


