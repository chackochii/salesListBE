import db from '../index.js';

export const getAllProducts = async () => {
  return await db.Product.findAll({
    attributes: ['ProductID', 'ProductName', 'UnitPrice'],
    order: [['ProductName', 'ASC']]
  });
};