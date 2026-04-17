import * as cityService from './service.js';

export const fetchFilteredCities = async (req, res) => {
  try {
    const { countryId } = req.params;
    
    if (!countryId) {
      return res.status(400).json({ success: false, message: "Country ID is required" });
    }

    const cities = await cityService.getCitiesByCountry(countryId);
    
    res.status(200).json({
      success: true,
      data: cities
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};