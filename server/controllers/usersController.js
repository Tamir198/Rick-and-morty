import jwt from "jsonwebtoken"
import userService from "../services/user.js";

export function generateToken(req, res) {
  res.send(process.env.TOKEN_SECRET);
}

export async function loginUser(req, res) {
  const { username, password } = req.body;
  const user = await userService.getUser(username);

  if (user.name != username) {
    return res.status(403).json({
      error: "invalid login",
    });
  }

  const token = jwt.sign({ user, password }, process.env.TOKEN_SECRET, { expiresIn: "1h" });
  res.cookie("token", token);
  res.send({ username, isLoggedIn: true })
}


