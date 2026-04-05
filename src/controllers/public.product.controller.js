import * as publicProductService from "../services/public.products.service.js";

const getProducts = async (req, res) => {
  try {
    const result = await publicProductService.getProducts(req.query);
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export default {
  getProducts,
};