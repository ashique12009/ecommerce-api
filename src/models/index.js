import sequelize from "../config/database.js";
import User from "./user.model.js";
import Product from "./product.model.js";

const db = {};

db.sequelize = sequelize;
db.User = User;
db.Product = Product;

export default db;