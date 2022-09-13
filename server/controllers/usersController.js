import { StatusCodes } from "../utils/statusCodeHelper.js"
import jwt from "jsonwebtoken"
import userService from "../services/userService.js";

export function generateToken(req, res) {
  res.send(process.env.TOKEN_SECRET);
}

export async function loginUser(req, res) {
  const { username, password } = req.body;
  const user = await userService.getUser(username, password);

  if (!user || user.name !== username || user.password !== password) {
    return res.status(StatusCodes.FORBIDDEN).json({
      error: "invalid login",
    });
  }

  const token = jwt.sign({ user, password }, process.env.TOKEN_SECRET, { expiresIn: "1h" });
  res.cookie("token", token);
  res.send({ username, isLoggedIn: true })
}


