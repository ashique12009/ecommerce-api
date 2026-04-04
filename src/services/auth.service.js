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

const loginUser = async (data) => {
  const { email, password } = data;

  const user = await User.findOne({ where: { email } });
  if (!user) {
    throw new Error("Invalid email or password");
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Invalid email or password");
  }

  const token = generateToken({ id: user.id, email: user.email });

  return { user, token };
}

export default {
  registerUser,
  loginUser,
};