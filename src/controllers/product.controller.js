import * as productService from "../services/product.service.js";

const getProducts = async (req, res) => {
  try {
    const result = await productService.getProducts(req.query);
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export default {
  getProducts,
};