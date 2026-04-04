import { Op } from "sequelize";
import Product from "../models/product.model.js"; 

export const getProducts = async ({ page = 1, limit = 10, search, minPrice, maxPrice }) => {
  const offset = (page - 1) * limit;

  const where = {};

  if (search) {
    where.name = { [Op.like]: `%${search}%` };
  }

  const priceFilter = {};

  if (minPrice) priceFilter[Op.gte] = minPrice;
  if (maxPrice) priceFilter[Op.lte] = maxPrice;

  const { rows, count } = await Product.findAndCountAll({
    where,
    limit,
    offset,
    order: [["createdAt", "DESC"]],
  });

  return {
    data: rows,
    pagination: {
      total: count,
      page,
      limit,
    },
  };
}