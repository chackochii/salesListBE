import * as productService from './service.js';

export const listProducts = async (req, res) => {
  try {
    const products = await productService.getAllProducts();
    res.status(200).json({
      success: true,
      data: products
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};