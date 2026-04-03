import sequelize from "../config/database.js";
import User from "./user.model.js";

const db = {};

db.sequelize = sequelize;
db.User = User;

export default db;