import * as countryService from './service.js';

export const listCountries = async (req, res) => {
  try {
    const countries = await countryService.getAllCountries();
    res.status(200).json({
      success: true,
      data: countries
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};