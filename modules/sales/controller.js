import * as salesService from './service.js';

// POST: Handle the form submission
export const submitSale = async (req, res) => {
  try {
    const result = await salesService.createFullSale(req.body);
    res.status(201).json({ 
      success: true, 
      message: "Sales record and details saved successfully!",
      id: result.SalesMasterID 
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// GET: Handle the list view
export const getSalesList = async (req, res) => {
  try {
    const data = await salesService.getAllSalesWithDetails();
    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const getMetaData = async (req, res) => {
  try {
    const [users, countries, products] = await Promise.all([
      User.findAll({ attributes: ['UserID', 'UserName'] }),
      Country.findAll({ attributes: ['CountryID', 'CountryName'] }),
      Product.findAll({ attributes: ['ProductID', 'ProductName', 'UnitPrice'] })
    ]);
    res.json({ success: true, data: { users, countries, products } });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};