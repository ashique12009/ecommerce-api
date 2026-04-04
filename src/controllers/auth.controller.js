import authService from "../services/auth.service.js";
import User from "../models/user.model.js";

const register = async (req, res) => {
  try {
    const user = await authService.registerUser(req.body);
    res.status(201).json({ message: "User registered successfully", user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { user, token } = await authService.loginUser(req.body);
    res.json({ message: "Login successful", user, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getMe = async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id, {
      attributes: { exclude: ["password"] },
    });

    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export default {
  register,
  login,
  getMe,
};
