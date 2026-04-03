import bcrypt from "bcrypt";
import { generateToken } from "../utils/token.js";
import User from "../models/user.model.js";

const registerUser = async (data) => {
  const {name, email, password} = data;

  const existingUser = await User.findOne({ where: { email } });
  if (existingUser) {
    throw new Error("Email already in use");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({ name, email, password: hashedPassword });

  return newUser;
}

export default {
  registerUser,
};